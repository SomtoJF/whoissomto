import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	"..",
	"dist",
);
const PORT = Number(process.env.PORT || 3000);

const MIME = {
	".css": "text/css; charset=utf-8",
	".html": "text/html; charset=utf-8",
	".ico": "image/x-icon",
	".js": "text/javascript; charset=utf-8",
	".json": "application/json",
	".map": "application/json",
	".otf": "font/otf",
	".png": "image/png",
	".svg": "image/svg+xml",
	".ttf": "font/ttf",
	".webp": "image/webp",
	".woff": "font/woff",
	".woff2": "font/woff2",
};

function insideDist(file) {
	const relative = path.relative(DIST, file);
	return relative !== "" && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function resolveFile(urlPath) {
	const decoded = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
	const relative = path.normalize(decoded).replace(/^[/\\]+/, "");
	const candidates = [path.join(DIST, relative)];

	if (!path.extname(relative)) {
		candidates.push(path.join(DIST, relative, "index.html"));
	}

	for (const file of candidates) {
		if (!insideDist(file) && file !== DIST) continue;
		if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
	}

	return path.join(DIST, "index.html");
}

http
	.createServer((req, res) => {
		const url = new URL(req.url || "/", `http://${req.headers.host}`);
		const file = resolveFile(url.pathname);
		const type = MIME[path.extname(file).toLowerCase()] ?? "application/octet-stream";

		res.writeHead(200, { "Content-Type": type });
		if (req.method === "HEAD") {
			res.end();
			return;
		}
		fs.createReadStream(file).pipe(res);
	})
	.listen(PORT, "0.0.0.0", () => {
		console.log(`Serving dist/ on http://0.0.0.0:${PORT}`);
	});
