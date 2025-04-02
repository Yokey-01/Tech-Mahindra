export function Fruits(){
    return(
        <ul>
            <li>Grapes <img src="https://media.istockphoto.com/id/842928214/photo/fresh-grapes-in-the-basket.jpg?s=612x612&w=0&k=20&c=SPUyIifWeeXCda_P8sqE0WFvZ-pDyaQ4aZLjNHpYEc4="></img></li>
            <li>Mango <img src="https://media.istockphoto.com/id/1152750103/photo/sliced-alphonso-mangoes.jpg?s=612x612&w=0&k=20&c=hEnXEjJC0WPVA7OzTIVY_DMeexjSAX_Dk5RCEgOX_S8="></img></li>
            <li>Pine apple <img src="https://media.istockphoto.com/id/452352231/photo/pineapple.jpg?s=612x612&w=0&k=20&c=BioDwSdBPMlCpc56389y9JUsAJFGXkk5gr14R4hxikY="></img></li>
        </ul>
    )
}
function WebsiteLink(){
    return(
        <>
        <a href='https://media.istockphoto.com/id/842928214/photo/fresh-grapes-in-the-basket.jpg?s=612x612&w=0&k=20&c=SPUyIifWeeXCda_P8sqE0WFvZ-pDyaQ4aZLjNHpYEc4='>Grapes</a><br></br>
        <a href='https://media.istockphoto.com/id/1152750103/photo/sliced-alphonso-mangoes.jpg?s=612x612&w=0&k=20&c=hEnXEjJC0WPVA7OzTIVY_DMeexjSAX_Dk5RCEgOX_S8='>Mango</a><br></br>
        <a href='https://media.istockphoto.com/id/452352231/photo/pineapple.jpg?s=612x612&w=0&k=20&c=BioDwSdBPMlCpc56389y9JUsAJFGXkk5gr14R4hxikY='>PineApple</a>
        </>
    )
}
export { WebsiteLink }

function Blog(){
    return(
        <>
        <h3>Fruit Blog</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis impedit, quidem dolor adipisci odit consectetur quisquam cumque neque porro ex est expedita eligendi veniam deleniti ad sed explicabo nostrum quos dicta sit autem! Fugiat nemo commodi rerum, eveniet dignissimos et saepe sint non necessitatibus illo similique id laboriosam in sed ratione beatae debitis totam earum recusandae possimus ducimus. Laborum itaque quibusdam dolorum iusto, consequuntur consectetur reprehenderit aut, est, nemo architecto eos nobis expedita explicabo velit. Ut error tenetur dolorem, quasi ab accusamus quibusdam molestias minima ea, in iusto tempore enim iste consectetur debitis vitae itaque, ipsum maxime! Adipisci, molestias modi!</p>
        <h3>-Yokey</h3>
        </>
    )
}
export { Blog }

function Footer(){
    return(
        <>
        <Blog />
        <footer>Copyrights@2025</footer>
        </>
    )
}
export { Footer }