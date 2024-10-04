import { request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { Article } from '../../queries/getQuery'; 
import styles from './Home.module.scss';
import Markdown from "markdown-to-jsx";

export const Home = () => {
    const articleId = 'cm1rvp5ru4z4q07mfaoghw6dr'; 

    const { data, isLoading, error } = useQuery({
        queryKey: ["Article", articleId],
        queryFn: async () => request(
            "https://eu-west-2.cdn.hygraph.com/content/cm1ru4zn601k507ui1urzlpd8/master",
            Article, 
            { ArticleId: articleId }
        ),
    });

    if (error) {
        console.log("Error: ", error);
        return <div>Error loading data</div>;
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <article className={styles.article}>
            <header>
                <h1 className={styles.articleTitle}>{data.article.title}</h1>
                <p className={styles.articleDate}>D. {data.article.date}</p>
            </header>
    
            <img src={data.article.image.url} alt={data.article.title} className={styles.articleImage} />
    
            <section className={styles.articleContent}>
                <Markdown>{data.article.content}</Markdown>
            </section>
    
            <footer>
                <a href="#" className={styles.readMore}>Læs mere</a>
            </footer>
        </article>
    );
    
};
