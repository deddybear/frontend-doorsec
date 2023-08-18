import {Heading, SimpleGrid, Text} from "@chakra-ui/react";
import CardComponents from "../../components/card/card-components";

const dataCard: number = [
    {textTitle: 'Customer Dashboard', textBody: 'View a summary of all your customers over the last month.'},
    {textTitle: 'Selling Dashboard', textBody: 'View a summary of all your selling over the last month.'},
    {textTitle: 'Buying Dashboard', textBody: 'View a summary of all your buying over the last month.'},
];

const DashboardPage : React.FC = () => {

    return (
            <SimpleGrid columns={3} spacing={3}>
                {
                    dataCard.map((items) => (
                        <CardComponents
                            headerCard={
                                <Heading size='md'>{ items.textTitle }</Heading>
                            }
                            bodyCard={
                                <Text>{ items.textBody }</Text>
                            }
                            footerCard={
                                null
                            }
                        />
                    ))
                }
            </SimpleGrid>
    )
}

export default DashboardPage