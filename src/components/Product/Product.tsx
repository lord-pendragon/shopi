import { Button } from "@mui/material"
import { Page } from "../../PageStyles";
import * as Styled from "./ProductStyles"

function Product() {

    return(
        <Page>
            <Styled.Product>
                <Styled.ProductContainer container direction="column" xs={12}>
                    <Styled.ProductItem item xs={6}>
                        The product is {localStorage.getItem('product')}
                        <Button onClick={() => {localStorage.setItem('page','Landing'); window.location.reload()}}>Go Back</Button>
                    </Styled.ProductItem>
                    <Styled.Reviews container xs={6}>
                        Reveiws go here
                    </Styled.Reviews>
                </Styled.ProductContainer>
            </Styled.Product>
        </Page>
    )
}
export default Product

