import './news.css';
import image from './../../images/news-image1.jpg'
import image2 from './../../images/news-image2.jpg';
import image3 from './../../images/news-image3.jpg';
import authorImage from './../../images/author-image.jpg';
import { useState, useEffect } from "react";


const articles = [
     {
          title: 'About Amazing Technology',
          shortTitle: 'Amazing Technology',
          content: 'Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis.', 
          illustration:  {
                         title: 'news-image',
                         image: image
                         },
          author:   {
                    name: 'Jeremie Carlson',
                    function: 'CEO / Founder',
                    title:'author-image',
                    image: authorImage                 
                    },
          date: 'March 08, 2018'
     },
     {
          title: 'Introducing a new healing process', 
          shortTitle: 'New Healing Process',
          content: 'Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.',
          illustration:  {
                         title: 'news-image2',
                         image: image2
                         },
          author:   {
                    name: 'Jason Stewart',
                    function: 'General Director',
                    title:'author-image',
                    image: authorImage                 
                    },
          date: 'February 20, 2018'
                    
     },
     {
          title: 'Review Annual Medical Research', 
          shortTitle: '',
          content: 'Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim.',
          illustration:            {
               title: 'news-image3',
               image: image3
          },
          author:   {
                    name: 'Andrio Abero',
                    function: 'Online Advertising',
                    title:'author-image',
                    image: authorImage               
                    },
          date: 'January 27, 2018'
     }
]

const News = (props) => {

     const [articlesList, setArticlesList] = useState([]);

     useEffect(() => {
          fetch('https://127.0.0.1:8000/apip/articles?page=1')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Erreur réseau');
                  }
                  return response.json()
              })
              .then((data) => {
                  setArticlesList(data['hydra:member']);
                  console.log(data['hydra:member'])
              })
              .catch(error => {
                  console.log('Erreur : ', error)
              });
     }, []);

     return (
          <div>
               <section id="news" data-stellar-background-ratio="2.5">
                    <div className="container">
                         <div className="row">

                              <div className="col-md-12 col-sm-12">
                                   <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                                        <h2>Latest News</h2>
                                   </div>
                              </div>

                              {articlesList.slice(0,3).map((article, index) => (
                                   <div key={index} className="col-md-4 col-sm-6" id="NEWSTHUMB">
                                        <div className="news-thumb wow fadeInUp" data-wow-delay="0.4s">
                                             <a href="news-detail.html">
                                                  <img src={ article.illustration.image } className="img-responsive" alt={ articles[0].illustration.title }/>
                                             </a>
                                             <div className="news-info">
                                                  <span>{ new Date(article.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: '2-digit'})  }</span>
                                                  <h3><a href="news-detail.html">{ article.title }</a></h3>
                                                  <p>{ article.content }</p>
                                                  <div className="author">
                                                       <img src={ article.author.image } className="img-responsive" alt=""/>
                                                       <div className="author-info">
                                                            <h5>{ article.author.name }</h5>
                                                            <p>{ article.author.function }</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              ))} 
                         </div>
                    </div>
               </section>
          </div>
     );
}
     
export default News;
export { articles };
