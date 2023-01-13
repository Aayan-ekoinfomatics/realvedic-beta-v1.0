import img from '../assets/images/single_product.png'
import yt from '../assets/images/youtube.png'

const foodDetails = {
    video_data: {
        video: yt,
        title: 'Make Best Dosa with us!',
    },
    // food: [
    //     {title: 'Kokum Rasam | Instant Mix', image: img, price: '110.0', weight: '250'}
    // ],
    food: {
        title: 'Kokum Rasam | Instant Mix',
        image: img,
        price: '110.0',
        weight: '250'
    },
    // blog: [
    //     {title: '', content: 'Soaking the lentils, rice, making the batter, fermenting the batter calls for time, planning and some prep work. So for your ease of understanding, I have divided this step by step guide into 4 main parts:', points: ['Soaking rice and lentils', 'Making dosa batter in a blender or mixer-grinder', 'Fermenting dosa batter', 'Making dosa']}
    // ],
    blog: {
        title: 'Our special recipe!',
        content: 'Soaking the lentils, rice, making the batter, fermenting the batter calls for time, planning and some prep work. So for your ease of understanding, I have divided this step by step guide into 4 main parts:',
        points: ['Soaking rice and lentils', 'Making dosa batter in a blender or mixer-grinder', 'Fermenting dosa batter', 'Making dosa']
    }
}

export default foodDetails