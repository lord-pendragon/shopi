import * as Styled from "./LandingStyles"
import SplashImageImport from "../../assets/Splash.jpg"

function Landing() {

    const goToProduct = (product: string) => {
        localStorage.setItem('page','Product')
        localStorage.setItem('product',product)
        window.location.reload()
    }

    return(
        <Styled.Landing>
            <Styled.SplashImage>
                Splash Image
            </Styled.SplashImage>
            <Styled.DealCards container direction="row" >
                <Styled.DealCard item xs={3} onClick={() => goToProduct('Free')}>
                    Free
                </Styled.DealCard>
                <Styled.DealCard item xs={3} onClick={() => goToProduct('24/7')}>
                    24/7
                </Styled.DealCard>
                <Styled.DealCard item xs={3} onClick={() => goToProduct('100%')}>
                    100%
                </Styled.DealCard>
            </Styled.DealCards>
            <Styled.DealImages container direction="row">
                <Styled.DealImage item xs={5} onClick={() => goToProduct('Deal 1')}>
                    Deal Image 1
                </Styled.DealImage>
                <Styled.DealImage item xs={5} onClick={() => goToProduct('Deal 2')}>
                    Deal Image 2
                </Styled.DealImage>
            </Styled.DealImages>
            <Styled.AllItems container direction="column">
                <Styled.AllItemsRow container direction="row">
                    <Styled.AllItem item onClick={() => goToProduct('Item 1')}>
                        Item 1
                    </Styled.AllItem>
                    <Styled.AllItem item onClick={() => goToProduct('Item 2')}>
                        Item 2
                    </Styled.AllItem>
                    <Styled.AllItem item onClick={() => goToProduct('Item 3')}>
                        Item 3
                    </Styled.AllItem>
                </Styled.AllItemsRow>
                <Styled.AllItemsRow container direction="row">
                    <Styled.AllItem item onClick={() => goToProduct('Item 4')}>
                        Item 4
                    </Styled.AllItem>
                    <Styled.AllItem item onClick={() => goToProduct('Item 5')}>
                        Item 5
                    </Styled.AllItem>
                    <Styled.AllItem item onClick={() => goToProduct('Item 6')}>
                        Item 6
                    </Styled.AllItem>
                </Styled.AllItemsRow>
            </Styled.AllItems>
        </Styled.Landing>
    )
}
export default Landing

