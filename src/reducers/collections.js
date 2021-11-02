const initialState = [
    {
        id: 1,
        name: 'Tất cả các sản phẩm',
        quantity: 200,
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/240092748_2365630786914618_6101643145671007656_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=zTRBinECqVYAX-VRyov&tn=GpcnAIwbFsQeKyIr&_nc_ht=scontent.fhan6-1.fna&oh=42264e723602cb4ae5c8781a32420880&oe=6142B8E3'
    },
    {
        id: 2,
        name: 'Túi cói tự nhiên',
        quantity: 50,
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/239633576_2365630423581321_8787734669653493728_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=8-MwnAc9_iwAX-r99a1&_nc_ht=scontent.fhan6-1.fna&oh=8d2a9651ab037680461dd035500c49c3&oe=6143245C'
    },
    {
        id: 3,
        name: 'Vật dụng dã ngoại',
        quantity: 10,
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t1.6435-9/241232302_227490376062596_2032039544516312678_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=KIRGrBjgD_wAX9TWlwQ&tn=h1J9xyvw4Sx0zFfZ&_nc_ht=scontent.fhan6-1.fna&oh=f9b7d22460ade2a3a2994917e17d2641&oe=6164E304'
    },
    {
        id: 4,
        name: 'Vật dụng gia đình',
        quantity: 15,
        image: 'https://cdn.vatgia.vn/pictures/fullsize/2016/08/12/oah1470969984.jpg'
    },
    {
        id: 5,
        name: 'Khuyên tai vòng cổ',
        quantity: 80,
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t1.6435-9/195017794_159790352832599_5184297371198187832_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=FDV2MnVmujQAX_gilht&_nc_ht=scontent.fhan6-1.fna&oh=53542c5318e5f2d5dc1abfcbe502ca40&oe=61651000'
    },
    {
        id: 6,
        name: 'Mũ cói, mũ len',
        quantity: 35,
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t1.6435-9/191344051_157705343041100_8210111741851281968_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=kAOdasIFhTcAX8j1u5Q&_nc_ht=scontent.fhan6-1.fna&oh=8d4c3188e4c5a66b926953c1ee372d09&oe=6164FA5B'
    },
    {
        id: 7,
        name: 'Túi gỗ, túi mây',
        quantity: 8,
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t1.6435-9/236408792_217281007083533_5058774523753688425_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QX_fXaqLR6kAX_aI7Sb&_nc_ht=scontent.fhan6-1.fna&oh=084b188b6aa1158fd414e8bd4a02b387&oe=616326D5'
    },
    {
        id: 8,
        name: 'Các sản phẩm khác',
        quantity: 40,
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t1.6435-9/187984170_153461386798829_4848679694514129061_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=eKBNtS9Ix68AX-XoY9L&_nc_ht=scontent.fhan6-1.fna&oh=505912a7d0ad576d32c1d925f9cc025b&oe=6163AAB9'
    },
];

const collections = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default collections;