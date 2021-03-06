export default function Navbar() {
    return (
        <header>
            <div class="navbar">

                <div class="navbar-mobile none-desktop">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <img class="navbar-mobile-imagem" src="/img/logo.png" alt="logo-instagram" />
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>

                <div class="navbar-desktop none-mobile">
                    <div class="navbar-inicio">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="linha-vertical none-mobile"></div>
                        <img src="/img/logo.png" alt="logo-instagram" />
                    </div>

                    <div class="navbar-meio">
                        <form>
                            <input class="navbar-input none-mobile" type="text" value="Pesquisar" />
                        </form>
                    </div>

                    <div class="navbar-fim">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </header>
    );
}
