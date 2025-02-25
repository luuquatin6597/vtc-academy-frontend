import { ToDoList } from "../interface/toDoList";

export const initalToDoList: ToDoList[] = [
    {
        category: "1",
        title: "Top 100 Bài Hát",
        content: "Quang Hùng MasterD, RIN9, Rhymastic, R.Tee, Masew",
        status: true,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/a/8/f/7a8f953aa385d67fc1fa4ca7448fd3e8.jpg",
        id: (Math.floor(Math.random() * 900000) + 100000).toString()
    },
    {
        category: "1",
        title: "Top 100 Pop Âu Mỹ",
        content: "Justin Bieber, Ed Sheeran, Maroon 5, Ariana Grande, Taylor Swift",
        status: true,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/3/2/0/63207ba6db02bac379928147081397b2.jpg",
        id: (Math.floor(Math.random() * 900000) + 100000).toString()
    },
    {
        category: "1",
        title: "Top 100 Nhạc Hàn",
        content: "IU, BTS, BLACKPINK, TWICE, EXO",
        status: true,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/9/c/3/d9c3a6a09c4715ca6e26f62a988e31ca.jpg",
        id: (Math.floor(Math.random() * 900000) + 100000).toString()
    },
    {
        category: "1",
        title: "Top 100 Nhạc Rap",
        content: "Karik, Binz, Rhymastic, R.Tee, Masew",
        status: true,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/b/e/c/6becd51a6def43fe4daedfe8f7a67954.jpg",
        id: (Math.floor(Math.random() * 900000) + 100000).toString()
    },
    {
        category: "2",
        title: "Top 100 Nhạc EDM Việt",
        content: "Jack, K-ICM, Masew, R.Tee, Rhymastic",
        status: true,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/5/4/d/954d2d517df032fa0ef6331388ffdeec.jpg",
        id: (Math.floor(Math.random() * 900000) + 100000).toString()
    },
    {
        category: "2",
        title: "Top 100 Nhạc V-Pop",
        content: "AMEE, B Ray, Binz, Đen, T.R.I",
        status: true,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/5/2/8/752821a779e62f12b25be0d557654214.jpg",
        id: (Math.floor(Math.random() * 900000) + 100000).toString()
    },
    {
        category: "2",
        title: "Top 100 Nhạc Phim",
        content: "Sơn Tùng M-TP, AMEE, Đen, JustaTee, Phương Ly",
        status: true,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/8/2/f/a82fc0c5285c137fb3acfcfb5a066a98.jpg",
        id: (Math.floor(Math.random() * 900000) + 100000).toString()
    },
    {
        category: "2",
        title: "Top 100 Nhạc Trịnh",
        content: "Trịnh Công Sơn, Khánh Ly, Quang Dũng, Quang Lê, Hồng Nhung",
        status: true,
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/3/d/6/63d66cba99e32af4630120850c19bd53.jpg",
        id: (Math.floor(Math.random() * 900000) + 100000).toString()
    }
]