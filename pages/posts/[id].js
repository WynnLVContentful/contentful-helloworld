export default function Page({ posts }) {
    return posts[0].title;
  }
  
  export async function getStaticProps() {
    return {
      props: {
        posts: [
          {
            title: 'Hello World!',
          },
        ],
      },
      revalidate: 10, // In seconds
    };
  }
  
  export async function getStaticPaths() {
    return {
      paths: [
        {
          params: { id: '1' },
        },
      ],
      fallback: 'blocking',
    };
  }
  