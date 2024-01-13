/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import image from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/UseMenu';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
const Menu = () => {

    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const popular = menu.filter(item => item.category === 'popular');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    console.log(offered)
    return (
        <div>
            <Helmet>
                <title>Kutumbari | Menu</title>
            </Helmet>
            <Cover
                img={image}
                title={"OUR MENU"}
                p={"hello you are ready"}
            ></Cover>
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/** desert section menu */}
            <MenuCategory
                items={dessert} img={dessertImg}
                title={"dessert"}
                p={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/** Pizza section menu */}
            <MenuCategory
                items={pizza} img={pizzaImg}
                title={"pizza"}
                p={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/** Salad section menu */}
            <MenuCategory
                items={salad} img={saladImg}
                title={"salad"}
                p={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            {/** soup section menu */}
            <MenuCategory
                items={soup} img={soupImg}
                title={"soup"}
                p={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
            <MenuCategory
                items={drinks} img={soupImg}
                title={"drinks"}
                p={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>
        </div>
    );
};

export default Menu;