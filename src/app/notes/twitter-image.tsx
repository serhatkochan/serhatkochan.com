import OpengraphImage from 'components/OpengraphImage';

export const runtime = 'edge';

const Image = async () => {
    return await OpengraphImage({title: 'Notlar', description: "Programlama, ürün geliştirme, liderlik, seyahat ve diğer rastgele şeyler hakkındaki tüm düşüncelerim."});
};

export default Image;
