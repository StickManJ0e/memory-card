let Card = (src, title, color, id) => {
    let backgroundColor = {
        backgroundColor: color,
    };

    return{
        src, 
        title,
        backgroundColor,
        id,
    }
}

export default Card;