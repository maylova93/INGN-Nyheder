import styles from './Footer.module.scss'; 

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Adresse:</h3>
        <p>Intet nyt - Godt nyt ApS</p>
        <p>Tulipanvej 232</p>
        <p>7320 Valby Øster</p>
      </div>

      <div className={styles.column}>
        <h3>Links</h3>
        <p>vikanweb.dk</p>
        <p>overpådenandenside.dk</p>
        <p>retsinformation.dk</p>
        <p>nogetmednews.dk</p>
      </div>

      <div className={styles.column}>
        <h3>Politik</h3>
        <p>Privatlivspolitik</p>
        <p>Cookiepolitik</p>
        <p>Købsinformation</p>
        <p>Delingspolitik</p>
      </div>

      <div className={styles.column}>
        <h3>Kontakt</h3>
        <p>ingn@nyhed.dk</p>
        <p>telefon: 23232323</p>
        <p>fax: 123123-333</p>
      </div>
    </footer>
  );
};
