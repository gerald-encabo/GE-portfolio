export interface ProjectType {
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

export interface ResumeType {
    id: number
    type: string
    year: string,
    companyName: string,
    title: string,
    desc: string[]
}

export interface TitleProps {
    title: string;
}

export interface MenuItemsProps {
    menuItems: ProjectType[]
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

export interface AccordionProps {
    data: Array<ResumeType>
    type: string
}

export interface AccordionItemProps {
    data: ResumeType, 
    type: string, 
    key: number, 
    isOpen: boolean, btnOnClick: () => void
}