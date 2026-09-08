import Image from "next/image";
import footerImage from "../../../public/footer_image.jpeg";

export default function Footer() {
  return (
    <div className="space-y-2">
      <div className="w-full relative rounded-lg overflow-hidden object-cover object-center h-36">
        <Image
          src={footerImage}
          alt="Somtochukwu"
          className="w-full object-cover object-center sm:object-bottom"
          fill
        />
      </div>
    </div>
  );
}
