var initialState = [
    {
        id: 1,
        name: 'Túi mây Balo',
        oldPrice: '35.00',
        newPrice: '28.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/240092748_2365630786914618_6101643145671007656_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=zTRBinECqVYAX-VRyov&tn=GpcnAIwbFsQeKyIr&_nc_ht=scontent.fhan6-1.fna&oh=42264e723602cb4ae5c8781a32420880&oe=6142B8E3'
    },
    {
        id: 2,
        name: 'Túi cói 3 hoa cúc đeo vai',
        oldPrice: '25.00',
        newPrice: '19.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/239633576_2365630423581321_8787734669653493728_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=8-MwnAc9_iwAX-r99a1&_nc_ht=scontent.fhan6-1.fna&oh=8d2a9651ab037680461dd035500c49c3&oe=6143245C'
    },
    {
        id: 3,
        name: 'Túi mây hộp đeo vai',
        oldPrice: '32.00',
        newPrice: '25.60',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241423364_2365630486914648_8873960359589214457_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=SYy-9ACfvfgAX__Fu7v&_nc_ht=scontent.fhan6-1.fna&oh=a650432e4c80cf96db242f003548c8a5&oe=61432A29'
    },
    {
        id: 4,
        name: 'Túi cói vuông hoa nhí đeo vai',
        oldPrice: '24.00',
        newPrice: '18.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241555138_2365630603581303_933562593942231967_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=fKohOtmCP58AX_1z34G&_nc_ht=scontent.fhan6-1.fna&oh=7be118eff23e60dc575625da885c9b36&oe=6142F916'
    },
    {
        id: 5,
        name: 'Túi cói bầu 3 hoa hướng dương đeo vai',
        oldPrice: '24.00',
        newPrice: '18.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241257747_2366283510182679_8018330546422457645_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=llyr5Sm-Yc0AX8XA9c-&_nc_ht=scontent.fhan6-1.fna&oh=e16fe4f9ad9fc644a3d189ffefd594e6&oe=61428AB2'
    },
    {
        id: 6,
        name: 'Túi mây dáng giọt nước đeo vai',
        oldPrice: '34.00',
        newPrice: '28.50',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/239851629_2366283613516002_3456142320441708725_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=jcB6kbrHE2EAX9oDwf-&tn=GpcnAIwbFsQeKyIr&_nc_ht=scontent.fhan6-1.fna&oh=3537e074347fffc26425026f49c44375&oe=61427F47'
    },
    {
        id: 7,
        name: 'Túi ví mây khóa cách điệu quai da',
        oldPrice: '42.00',
        newPrice: '38.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/239681028_2366283763515987_1351012947315934576_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=rQSljseiyaIAX8Y-EkO&_nc_ht=scontent.fhan6-1.fna&oh=56c18bc686a1c28a0d73a188dc7d58ca&oe=6143471B'
    },
    {
        id: 8,
        name: 'Túi cói vuông quai to',
        oldPrice: '30.00',
        newPrice: '25.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/240661546_2366293313515032_2854807429449228656_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=VHPt13zb83MAX_fDMQl&_nc_ht=scontent.fhan6-1.fna&oh=e3276a763fb9f9f8d207f8e0ffb8bd2b&oe=614297DF'
    },
    {
        id: 9,
        name: 'Túi cói giấy dáng bầu xách tay',
        oldPrice: '25.00',
        newPrice: '20.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/239721087_2366284033515960_8680371868592783274_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=BvjU5InZzFgAX8D2gfQ&_nc_oc=AQlMEXnyMsgnkAk5LGwd78WZe6WIoNar2ESyl8pYAoM1nLbb_-oNcJ_8ZALxixN-yDI&_nc_ht=scontent.fhan6-1.fna&oh=1a8c37f9a534fe214719b4028fa330aa&oe=614273F2'
    },
    {
        id: 10,
        name: 'Túi liểu dáng hộp gắn nơ cầm tay',
        oldPrice: '35.00',
        newPrice: '28.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241106577_2366293833514980_726406550612614541_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=aFbjjD0b5Z8AX95MoiK&_nc_oc=AQmYXy1Eg5sSuPN5CRUhJD9jy9w4vPBDcXRCMVoMu1hRqMtDZcqLZcVGvqIwyQ8oIuE&tn=GpcnAIwbFsQeKyIr&_nc_ht=scontent.fhan6-1.fna&oh=bebb2e2c510dbe99d9421d41cc0bb718&oe=6142F482'
    },
    {
        id: 11,
        name: 'Túi len vuông tua dua đeo vai',
        oldPrice: '26.00',
        newPrice: '19.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241315559_2366284136849283_2034888340352302649_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=XjKLC3-uFxkAX8fOs3p&tn=GpcnAIwbFsQeKyIr&_nc_ht=scontent.fhan6-1.fna&oh=7771007bdba3dba84256c22e884c4db1&oe=61420107'
    },
    {
        id: 12,
        name: 'Túi len vuông cầm tay',
        oldPrice: '25.00',
        newPrice: '18.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241187766_2366284586849238_21575413850598604_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=99ZMesNgAwgAX-UyU1y&_nc_ht=scontent.fhan6-1.fna&oh=4e364a4900f61c2ebe5fff615bb0280c&oe=6142D104'
    },
    {
        id: 13,
        name: 'Mũ cói giấy buộc nơ xinh',
        oldPrice: '20.00',
        newPrice: '15.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/240650950_2366286930182337_3239937322050034115_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=9VN2a5TJN1oAX9lnEFn&_nc_ht=scontent.fhan6-1.fna&oh=00157d396a609d5700d0d125db064359&oe=61431C92'
    },
    {
        id: 14,
        name: 'Mũ đi biển vành vừa 52cm',
        oldPrice: '20.00',
        newPrice: '15.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241364986_2366286990182331_2389608754154703847_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=c-0gul5OnKoAX-vnyrG&tn=GpcnAIwbFsQeKyIr&_nc_ht=scontent.fhan6-1.fna&oh=f03512af96cd3e1acc015b0dfd133c78&oe=6142036E'
    },
    {
        id: 15,
        name: 'Dép cói đi biển gắn nơ',
        oldPrice: '20.00',
        newPrice: '10.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241193935_2366287420182288_1682937419990745108_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=xMBlBCNr9hwAX_7IQbW&_nc_ht=scontent.fhan6-1.fna&oh=da1093e2c88d59c4335cbbfdfbd7022e&oe=6142E4A5'
    },
    {
        id: 16,
        name: 'Hoa cài tóc đi biển',
        oldPrice: '20.00',
        newPrice: '8.00',
        image: 'https://scontent.fhan6-1.fna.fbcdn.net/v/t39.30808-6/241339634_2366287516848945_7975771648223078814_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=13nTX2okc0EAX_6P4AA&tn=GpcnAIwbFsQeKyIr&_nc_ht=scontent.fhan6-1.fna&oh=de30b44b9db07cf252a378f166fa4e38&oe=61424DAD'
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;