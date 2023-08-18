import CardProps from "../../model/components-props/card/CardProps";
import {Card, CardBody, CardFooter, CardHeader} from "@chakra-ui/react";

const CardComponents: React.FC<CardProps> = (
    {headerCard, bodyCard, footerCard}
) => {
    return (
        <Card>
            <CardHeader>{ headerCard }</CardHeader>
            <CardBody> { bodyCard } </CardBody>
            <CardFooter> { footerCard } </CardFooter>
        </Card>
    )
}

export default CardComponents;