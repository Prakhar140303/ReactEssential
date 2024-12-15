import './card.css'
function Card(){
    const profilePic = "https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg";
    return(
        <div className="card">
            <img className="card-image" src ={profilePic} alt ="profile picture"></img>
            <h2 className='card-title'>Prakhar Singh</h2>
            <p className='card-text'>I make resposive web applicatons and do problem solving</p>
        </div>
    );
}

export default Card