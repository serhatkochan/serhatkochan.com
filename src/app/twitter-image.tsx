import OpengraphImage from 'components/OpengraphImage';

export const runtime = 'edge';

const Image = async () => {
    return await OpengraphImage({title: 'Serhat Koçhan', description: 'Serhat Koçhan Kişisel Web Sitesi'});
};

export default Image;
