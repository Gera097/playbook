const posts= {
    username: "Gera Alba",
    dateCreated: "March 17",
    visible_to: "friends",
    post_content: "....",
    reactions: {
        haha: 7,
        likes: 100,
        sad: 20
    },
    comments: 50 
}

const user = {
    name: "Gera Alba",
    profile_picture: "...",
    cover_photo: "...",
    number_of_friends: 1300,
    intro: {
        studies_at: "Universidad de Guanajuato",
        went_to: "Preparatoria Salmantina"
    },
    posts: posts,
    about: {},
    friends: {},
    photos: {},
    videos: {},
    check_ins: {},
    more: {}
}


console.log(`Number of posts: ${user.posts.comments}`)