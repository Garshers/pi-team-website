import React from 'react';
import './policyPageStyle.css';
import { Header } from '../../HeaderAndFooter/header.js';

/**
 * @function policyPage
 * @returns {JSX.Element} - Component representing the policy page of the application.
 */
function PolicyPage() {

    return (
        <><Header/>
            <div className='policyMainBox'>
                <h1>Polityka prywatności</h1>

                <h2>POSTANOWIENIA OGÓLNE</h2>
                <p>Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych osób korzystających z serwisu internetowego pod adresem <a href="/">www.piteam.pl</a> (dalej jako „Użytkownicy” oraz „Serwis internetowy”).</p>
                <p>Dane osobowe Użytkowników przetwarzane są zgodnie z rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE, dalej „RODO”, ustawy z dnia 10 maja 2018 r. o ochronie danych osobowych oraz ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.</p>

                <h2>FORMULARZ KONTAKTOWY</h2>
                <p>Użytkownik w celu skorzystania z Formularza kontaktowego udostępnianego w Serwisie internetowym podaje następujące dane osobowe: adres e-mail, imię, nazwisko oraz numer telefonu.</p>
                <p>W przypadku składania zapytania o trening personalny, trening pływacki, kurs trenera personalnego, masaż lub obóz sportowy za pośrednictwem 
                    formularza kontaktowego, podanie danych osobowych jest warunkiem kontaktu w sprawie świadczenia usługi. 
                    Brak podania danych osobowych spowoduje niemożność udzielenia odpowiedzi na wiadomość wysłaną za pośrednictwem Formularza kontaktowego.</p>
                <p>Podane przez Użytkownika dane osobowe będą przetwarzane:</p>
                <ul>
                    <li>w celu udzielenia odpowiedzi na wiadomość Użytkownika o przedmiocie innym niż wskazany powyżej, na podstawie art. 6 ust. 1 lit. f RODO, do czasu udzielenia odpowiedzi na wiadomość Użytkownika.</li>
                </ul>
                <p>Dodatkowo w związku z korzystaniem przez Administratora z usług podmiotów trzecich:</p>
                <ul>
                    <li><a href="https://www.emailjs.com/">https://www.emailjs.com/</a> – usługa służąca do wysyłania wiadomości e-mail z poziomu przeglądarki, która może przetwarzać dane podane w formularzu kontaktowym w celu dostarczenia wiadomości do odbiorcy.</li>
                </ul>

                <h2>PRAWA OSÓB, KTÓRYCH DOTYCZĄ DANE</h2>
                <p>Użytkownikowi przysługuje prawo:</p>

                <ul>
                    <li>
                        <p><strong>dostępu do swoich danych osobowych</strong> – osoba, której dane dotyczą, jest uprawniona do uzyskania od Administratora potwierdzenia, czy przetwarzane są dane osobowe jej dotyczące, a jeżeli ma to miejsce, jest uprawniona do uzyskania dostępu do nich oraz następujących informacji:</p>
                        <ul>
                            <li>cele przetwarzania,</li>
                            <li>kategorie odnośnych danych osobowych,</li>
                            <li>informacje o odbiorcach lub kategoriach odbiorców, którym dane osobowe zostały lub zostaną ujawnione, w szczególności o odbiorcach w państwach trzecich lub organizacjach międzynarodowych,</li>
                            <li>w miarę możliwości planowany okres przechowywania danych osobowych, a gdy nie jest to możliwe, kryteria ustalania tego okresu,</li>
                            <li>informacje o prawie żądania od Administratora sprostowania usunięcia lub ograniczenia przetwarzania danych osobowych dotyczących osoby, której dane dotyczą, oraz do wniesienia sprzeciwu wobec takiego przetwarzania,</li>
                            <li>informacje o prawie wniesienia skargi do organu nadzorczego,</li>
                            <li>jeżeli dane osobowe nie zostały zebrane od osoby, której dane dotyczą – wszelkie dostępne informacje o ich źródle,</li>
                            <li>informacje o zautomatyzowanym podejmowaniu decyzji, w tym o profilowaniu, oraz – przynajmniej w tych przypadkach – istotne informacje o zasadach ich podejmowania, a także o znaczeniu i przewidywanych konsekwencjach takiego przetwarzania dla osoby, której dane dotyczą;</li>
                        </ul>
                    </li>

                    <li>
                        <p><strong>otrzymania kopii danych</strong> – Administrator dostarcza osobie, której dane dotyczą, kopie danych osobowych podlegających przetwarzaniu. Jeżeli Użytkownik zwraca się o kopię drogą elektroniczną i nie zaznaczy inaczej, to informacje zostaną udzielone w powszechnie stosowanej formie elektronicznej;</p>
                    </li>

                    <li>
                        <p><strong>sprostowania danych</strong> – Użytkownik ma prawo żądania od Administratora niezwłocznego sprostowania dotyczących go danych osobowych, które są nieprawidłowe. Z uwzględnieniem celów przetwarzania Użytkownik ma prawo żądania uzupełnienia niekompletnych danych osobowych, w tym poprzez przedstawienie dodatkowego oświadczenia;</p>
                    </li>

                    <li>
                        <p><strong>usunięcia danych („prawo do bycia zapomnianym”)</strong> – Użytkownik ma prawo żądania od Administratora niezwłocznego usunięcia dotyczących go danych osobowych, a Administrator ma obowiązek bez zbędnej zwłoki usunąć dane osobowe, jeżeli zachodzi jedna z następujących okoliczności:</p>
                        <ul>
                            <li>dane osobowe nie są już niezbędne do celów, w których zostały zebrane lub w inny sposób przetwarzane;</li>
                            <li>osoba, której dane dotyczą, cofnęła zgodę, na której opiera się przetwarzanie i nie ma innej podstawy prawnej przetwarzania;</li>
                            <li>osoba, której dane dotyczą, wnosi sprzeciw wobec przetwarzania i nie występują nadrzędne prawnie uzasadnione podstawy przetwarzania lub osoba, której dane dotyczą, wnosi sprzeciw wobec przetwarzania na potrzeby marketingu bezpośredniego;</li>
                            <li>dane osobowe były przetwarzane niezgodnie z prawem;</li>
                            <li>dane osobowe muszą zostać usunięte w celu wywiązania się z obowiązku prawnego przewidzianego w prawie Unii lub prawie państwa członkowskiego, któremu podlega administrator;</li>
                            <li>dane osobowe zostały zebrane w związku z oferowaniem usług społeczeństwa informacyjnego, o których mowa w art. 8 ust. 1 RODO.</li>
                        </ul>
                        <p>Prawo żądania usunięcia danych nie ma zastosowania w zakresie w jakim przetwarzanie jest niezbędne:</p>
                        <ul>
                            <li>do korzystania z prawa do wolności wypowiedzi i informacji;</li>
                            <li>do wywiązania się z prawnego obowiązku wymagającego przetwarzania na mocy prawa Unii lub prawa państwa członkowskiego, któremu podlega administrator, lub do wykonania zadania realizowanego w interesie publicznym lub w ramach sprawowania władzy publicznej powierzonej administratorowi;</li>
                            <li>z uwagi na względy interesu publicznego w dziedzinie zdrowia publicznego zgodnie z art. 9 ust. 2 lit. h) oraz i) i art. 9 ust. 3 RODO;</li>
                            <li>do celów archiwalnych w interesie publicznym, do celów badań naukowych lub historycznych lub do celów statystycznych zgodnie z art. 89 ust. 1 RODO, o ile prawdopodobne jest, że prawo, o którym mowa w ust. 1, uniemożliwi lub poważnie utrudni realizację celów takiego przetwarzania; lub</li>
                            <li>do ustalenia, dochodzenia lub obrony roszczeń.</li>
                        </ul>
                    </li>

                    <li>
                        <p><strong>ograniczenia przetwarzania</strong> – Użytkownik ma prawo żądania od Administratora ograniczenia przetwarzania w następujących przypadkach:</p>
                        <ul>
                            <li>Użytkownik kwestionuje prawidłowość danych osobowych – na okres pozwalający Administratorowi sprawdzić prawidłowość tych danych;</li>
                            <li>przetwarzanie jest niezgodne z prawem, a Użytkownik sprzeciwia się usunięciu danych osobowych, żądając w zamian ograniczenia ich wykorzystywania;</li>
                            <li>Administrator nie potrzebuje już danych osobowych do celów przetwarzania, ale są one potrzebne osobie, której dane dotyczą, do ustalenia, dochodzenia lub obrony roszczeń;</li>
                            <li>osoba, której dane dotyczą, wniosła sprzeciw wobec przetwarzania – do czasu stwierdzenia, czy prawnie uzasadnione podstawy po stronie administratora są nadrzędne wobec podstaw sprzeciwu osoby, której dane dotyczą.</li>
                        </ul>
                    </li>

                    <li>
                        <p><strong>prawo do przenoszenia danych</strong> – Użytkownik ma prawo otrzymać w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego dane osobowe go dotyczące, które dostarczył Administratorowi, oraz ma prawo przesłać te dane osobowe innemu administratorowi bez przeszkód ze strony Administratora, któremu dostarczono te dane osobowe, jeżeli przetwarzanie odbywa się na podstawie zgody lub na podstawie umowy oraz przetwarzanie odbywa się w sposób zautomatyzowany. Wykonując prawo do przenoszenia danych Użytkownik ma prawo żądania, by dane osobowe zostały przesłane przez Administratora bezpośrednio innemu administratorowi, o ile jest to technicznie możliwe;</p>
                    </li>

                    <li>
                        <p><strong>wniesienia sprzeciwu wobec przetwarzania danych osobowych</strong> – Użytkownik ma prawo w dowolnym momencie wnieść sprzeciw – z przyczyn związanych z jego szczególną sytuacją – wobec przetwarzania dotyczących go danych osobowych opartego na art. 6 ust 1 lit e (przetwarzanie jest niezbędne do wykonania zadania realizowanego w interesie publicznym lub w ramach sprawowania władzy publicznej powierzonej administratorowi) lub f (przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych przez administratora lub przez stronę trzecią, z wyjątkiem sytuacji, w których nadrzędny charakter wobec tych interesów mają interesy lub podstawowe prawa i wolności osoby, której dane dotyczą, wymagające ochrony danych osobowych, w szczególności gdy osoba, której dane dotyczą, jest dzieckiem) RODO, w tym profilowania na podstawie tych przepisów. Administratorowi nie wolno już przetwarzać tych danych osobowych, chyba że wykaże on istnienie ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec interesów, praw i wolności osoby, której dane dotyczą, lub podstaw do ustalenia, dochodzenia lub obrony roszczeń. Jeżeli dane osobowe są przetwarzane na potrzeby marketingu bezpośredniego, osoba, której dane dotyczą, ma prawo w dowolnym momencie wnieść sprzeciw wobec przetwarzania dotyczących jej danych osobowych na potrzeby takiego marketingu, w tym profilowania, w zakresie, w jakim przetwarzanie jest związane z takim marketingiem bezpośrednim. Jeżeli osoba, której dane dotyczą, wniesie sprzeciw wobec przetwarzania do celów marketingu bezpośredniego, danych osobowych nie wolno już przetwarzać do takich celów.</p>
                    </li>

                    <li>
                        <p><strong>cofnięcia zgody na przetwarzanie danych osobowych</strong> – w przypadku danych osobowych przetwarzanych w oparciu o wyrażoną przez Użytkownika zgodę. Użytkownik może cofnąć zgodę w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody wyrażonej przed jej cofnięciem.</p>
                    </li>
                </ul>

                <h2>SKARGA DO ORGANU NADZORCZEGO</h2>
                <p>W sytuacji, gdy Użytkownik uzna, że przetwarzanie podanych przez niego danych osobowych narusza przepisy RODO, posiada prawo do wniesienie skargi do organu nadzorczego. W Polsce organem nadzorczym jest Prezes Urzędu Ochrony Danych Osobowych.</p>
                <p style={{textAlign: 'center'}}>Urząd Ochrony Danych Osobowych<br />
                    ul. Stawki 2<br />
                    00-193 Warszawa<br />
                    tel. 22 531-03-00<br />
                    <a href="mailto:kancelaria@uodo.gov.pl">kancelaria@uodo.gov.pl</a><br />
                    Infolinia: 606-950-000
                </p>
            </div>
        </>
    );
}

export default PolicyPage;