export const imageSizes = [320, 480, 800, 1000, 1200, 1440, 2592, 3456];

export const viewPortSizes =
  '(max-width: 480px) 384px, (max-width: 600px) 750px, (max-width: 800px) 828px, (max-width: 1200px) 1080px, 1200px';

export const imageAndTextSizes = '(min-width: 1700px) 750px, (min-width: 1196px) 640px, 828px';

export const containerSizes =
  '(min-width: 1500px) 384px, (min-width: 992px) 828px, (min-width: 750px) 1080px,  1080px';

export const largeImageViewPortSize =
  '(min-width: 120px) and (max-width: 800px) 800px, (min-width: 801px) and (max-width: 2000px) 1440px, (min-width: 2001px) and (min-width: 2500px) 2592px, (min-width: 2501px) 3456px';

export const twoColumnSizes = `(max-width: 576px) calc(100vw - 48px), (max-width: 768px) 492px, (max-width: 992px) 704px, (max-width: 1200px) 342px, 578px`;
export const threeColumnSizes =
  '(min-width: 2000px) 750px, (min-width: 1200px) 492px, (min-width: 980px) 640px, 828px';
export const fourColumnSizes = threeColumnSizes;

export const isDefaultImage = (src: string | undefined) =>
  src?.includes('Themes/Standard/Images/WebEdit/default_image.svg');
