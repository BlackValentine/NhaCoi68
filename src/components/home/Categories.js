import './../../App.css'
import './Categories.css'

function Categories() {
    return (
        <section className="section categories" id="categories">
            <h2 className="section__title">Shop by Categories</h2>
            <div className="categories__container container grid">
                <ul className="categories__list">
                    <li className="categories__item">
                        <a href="#1" className="categories__link">
                            <img className="categories__img" alt="" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/jN0WDCk-OMIauh1j81fPC8uP7-RJMJpUQ8K1Ug_eiWk3hPdq_LDkGw3cUTlgPUQzlayG87AqiebqqthElz2BKjGqatv_F18xBHllqK0v8oPcZ9UgCdde0o_nr53vgNZBo3K16poFVuJMEJPEqxJwUlPutyT0e7EuJLNHB2Y2F8nGNzDDiOSOpaHm8f4zjvwkz67YSGAwow1-uFrJsSrnk1roBGPbPckDMRAqe6IZguRml7eLtF0Qm28NmmHPAZCdspZagtOaGWF7luz01JueHgOhBQKNtyDHltvtrgAQpoTSgehpXVuWUQjyKiaXWhL0sBCVvk_JtZev33t5AVJwV56IbaIG1Rue-tJFrB4JUGh3zJGQOvYzS1Bxu9L9AYaOPuUyvtMMPdEsRXIzW1i_dl08p6MblgxqifNBYNY0IwpWo0CW2IBdNgoDQeDMSxPf-y4siAwsKd9zYoffrnWwvghVtPDfwtbbuKQNrRP7bFL3qQR9zb-g0ndvUnvQuESlBwqgVGOMAdp6jZcoTlHsMmW7cPoAlerMx2A0CBsqjBCoep4nKAGOVIAZY3I4f0cQv9zPyzDSmAoTE8gklsV6d985zXNHPWaN6VrAWvUTJ2drQ4UPnbqu2wvBR6D28qqRf0MgF2Mm9wo9kKz0-qizdObV6neAhIMJS1NTqkDT4gzdc_ABC6hDESYxg-zODPciqPW4yNJ-WVxGtxScLpwxL-Q=w1110-h1478-no?authuser=0')` }} />
                            <div className="categories__text">Túi cói</div>
                        </a>
                    </li>
                    <li className="categories__item">
                        <a href="#1" className="categories__link">
                            <img className="categories__img" alt="" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/4uk_qwcLmfTOtfs4UjUtPGZrcSRvCUEDfTKg6T4N0urC84i3yZ0lOh8cVriDeiLiGrZSOvTSsPqWMo1JwPr0W4YkCLxCv-2bTZjLjTSXH3bukG4rzmWjY7dkDMJHmOKN5a3SRNJ-KSMr57DCG6PRH1UqpF5jOay9Xz-TCUKsoNYkxgndX88HaPl0SoG1xVjzX82_vwRwLFK3--9rPIRj_kvXAKuVdfViVL8YVWnpr1vq2lF09-F8RbQBqE7NPuxA1ylZ7ctTB53LR6pITdSfdD9Moby933PHqVRLcQ0yT0iV11FfxZ2KHNQSRi8NoNsLAOs1AuZe-QTS7I1_uuOayzqFvLgUl6hyT1fVK4eAsoxcChM4CaTRhyk8_m91VoHRomGRNEa2xNFVcmWD_0BDztM8or78FJEstBxUuO0sbY6r7VH83yGSMj_4rMkarrbOAlpqoeS10UfTCS2WHQSKGEETUbtBgwj-vulBi0jTNbmYKFPx7CqbxqEHzl6MjxxhKGCiSTv3YVT-NHrK2RLe0Hu8JjuU8rZO8DUFtVzxE3cd1wdomwGRi6uLZxuCI1yVQhvY_yBiaLHu4gPZMszOAZm3YU7YOt3y7N4D47OLQI0VVT6BXqOA3ecME6bB51ir57u_noc__WsdWXlHEJRJfXUcTwCLGlAtQEq5mLbSlaM4gzISQj_k8Pht2NE7wOmY7hp7mdjcSVocZF3P6PHaTdM=w750-h611-no?authuser=0')` }} />
                            <div className="categories__text">Mũ cói</div>
                        </a>
                    </li>
                    <li className="categories__item">
                        <a href="#1" className="categories__link">
                            <img className="categories__img" alt="" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/3SAl6Ap6ypBxi6VmVcb_pmmqEUTfAsLYt7EB9DTLBLF0YsJLHQCtYWJD7z2r5pQN0UbJ3RQDPJtumveTqHAvWhuUkqie1g-LEpMK6_qQrBtSGPVhj6YGOKSm4QS2AuO7ChfonL-cshdc9xQaYTnE9ikG2KtBGDQAzmlDXIYh8kx2_3ipQr9IS4_cQPnim6cLY7f45Y3aNk3W1Y37IXL0W0hgVW5u8uyU-2kHA2gzj-pQ4TgLFEOeiRfTlLTaT_BWuJOX2gkuIhmL3A-JO_LnLrRhU22FOOqd8iA-_nbHSIB0seNEcrUVusl555xCYvpEPCtGTsGksc3z-Fnw-TGrETXzQMDkPrdjHviXRuFdO620kwIaQLJoTBfziagn9TQymlZk85GQR8dH6rhOKzHvgRob7m9WJYYrzHGx0pmwgY946uQuX_CsLeXsOqrE22WUDLMuvC34Xx5up4eRTr5EfHf6zXhJhBEaGpcNRXZomX1YA_h7GABvRDwzr6Riq4PrHUsUTvVSLjx6XIKNEQx3UvhnsKHTY07ky7UcGcplvEV5Vf_BsnlwYKZwpjps2vqkGtfIp2Dhz67IH1wsjmyZwKHvJOavXwS8pWI1ng_gT0C2B-w9sR9ttF3yjroXysjbabt9FA2U7kiAwMUu_YSVnfMCxXIeTVt2IJeWXxkIq9zSkzI9GC0fFuSryn9jUF_0HZYHjCUi83x6yZqHzVPds6k=w1972-h1478-no?authuser=0')` }} />
                            <div className="categories__text">Khuyên tai cói</div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Categories;