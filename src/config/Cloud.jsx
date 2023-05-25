import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

const Cloud = () => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: import.meta.env.VITE_CLOUD_NAME
        }
      });
    const myImage = cld.image('v1670511054/small_img_Helado_Paleta_b09a82fa8a.jpg'); 
    myImage.resize(fill().width(250).height(250));
  return (
    <div>
        <AdvancedImage cldImg={myImage} />
    </div>
  )
}

export default Cloud