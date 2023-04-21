export interface ClassType {
    id: number,
    category: string,
    link1: string,
    link2: string,
    icon1: string,
    icon2: string,
    image: string,
    alt: string,
    title: string,
    desc: string
}

export interface TitleProps {
    title: string;
}

export interface MenuItemsProps {
    menuItems: ClassType[]
}

export interface HeaderProps {
    title: string;
    desc: string;
}

export interface CategoryProps {
    filter: (category: string) => void;
    categories: string[]
}

export interface LocationState {
    from: {
      pathname: string;
    };
}