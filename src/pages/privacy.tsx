import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function PrivacyPage() {

    const mainHeaderStyling = "";

    return (
        <div className="bg-black">
            <TracingBeam>
                <div className="flex justify-center max-w-2xl mx-auto p-12 text-gray-200">
                    <div className="flex flex-col gap-7 flex-wrap">
                        <div>
                            <h1>Zásady ochrany osobních údajů</h1>
                            <p>Poslední aktualizace: <span>{new Date().toLocaleDateString('cs-CZ')}</span></p>
                        </div>
                        <div>
                            <h2>Úvod</h2>
                            <p>Vítejte ve Výčetce! Já, Max Juškevič, si cením vašeho soukromí a zavazuji se chránit vaše
                                osobní údaje. Tyto zásady ochrany osobních údajů popisují typy informací, které
                                neshromažďuji, a způsob, jakým používám a chráním vaše data. Používáním mé aplikace
                                souhlasíte s postupy popsanými v těchto zásadách.</p>
                        </div>
                        <div>
                            <h2>Shromažďování a používání údajů</h2>
                            <h3>Žádné shromažďování údajů</h3>
                            <p>Výčetka neshromažďuje, neukládá ani nezpracovává žádné osobní údaje uživatelů. Aplikace
                                je navržena tak, aby fungovala bez přístupu k jakýmkoli uživatelským informacím, což
                                zajišťuje úplné soukromí a anonymitu.</p>
                        </div>
                        <div>
                            <h2>Služby třetích stran</h2>
                            <p>Protože Výčetka neshromažďuje žádná data, neintegruje se ani nepoužívá žádné služby
                                třetích stran, které by mohly shromažďovat nebo zpracovávat osobní údaje.</p>
                        </div>
                        <div>
                            <h2>Zabezpečení údajů</h2>
                            <h3>Ochrana uživatelských údajů</h3>
                            <p>I když Výčetka neshromažďuje osobní údaje, zavazuji se dodržovat nejvyšší standardy
                                bezpečnosti, abych zajistil, že vaše zkušenost s aplikací bude bezpečná a soukromá.</p>
                        </div>
                        <div>
                            <h2>Změny v těchto zásadách ochrany osobních údajů</h2>
                            <p>Tyto zásady ochrany osobních údajů mohu čas od času aktualizovat, aby odrážely změny v
                                mých postupech nebo z jiných provozních, právních či regulačních důvodů. Doporučuji vám
                                pravidelně kontrolovat tyto zásady kvůli případným změnám. O významných změnách vás budu
                                informovat zveřejněním nových zásad ochrany osobních údajů na této stránce.</p>
                        </div>
                        <div>
                            <h2>Kontaktujte mě</h2>
                            <p>Pokud máte jakékoli dotazy nebo obavy týkající se těchto zásad ochrany osobních údajů
                                nebo mých postupů při zpracování údajů, kontaktujte mě na:</p>
                            <p>Max Juškevič<br/>Email: max.juskevic@example.com</p>
                            <p>Děkuji, že používáte Výčetku!</p>
                        </div>
                        <div>
                            <h1>Privacy Policy</h1>
                            <p>Last updated: <span>{new Date().toLocaleDateString('en-GB')}</span></p>
                        </div>
                        <div>
                            <h2>Introduction</h2>
                            <p>Welcome to Výčetka! I, Max Juškevič, value your privacy and am committed to protecting
                                your personal data. This Privacy Policy outlines the types of information I do and do
                                not collect, as well as how I use and protect your data. By using my application, you
                                agree to the practices described in this policy.</p>
                        </div>
                        <div>
                            <h2>Data Collection and Usage</h2>
                            <h3>No Data Collection</h3>
                            <p>Výčetka does not collect, store, or process any personal data from its users. The
                                application is designed to function without accessing any user information, ensuring
                                complete privacy and anonymity.</p>
                        </div>
                        <div>
                            <h2>Third-Party Services</h2>
                            <p>Since Výčetka does not collect any data, it does not integrate with or use any
                                third-party services that might collect or process personal information.</p>
                        </div>
                        <div>
                            <h2>Data Security</h2>
                            <h3>User Data Protection</h3>
                            <p>While Výčetka does not collect personal data, I am committed to maintaining the highest
                                standards of security to ensure that your experience with the application is safe and
                                private.</p>
                        </div>
                        <div>
                            <h2>Changes to This Privacy Policy</h2>
                            <p>I may update my Privacy Policy from time to time to reflect changes in practices or for
                                other operational, legal, or regulatory reasons. You are encouraged to review this
                                policy periodically for any changes. I will notify you of any significant changes by
                                posting the new Privacy Policy on this page.</p>
                        </div>
                        <div>
                            <h2>Contact Me</h2>
                            <p>If you have any questions or concerns regarding this Privacy Policy or my data practices,
                                please contact me at:</p>
                            <p>Max Juškevič<br/>Email: max.juskevic@example.com</p>
                            <p>Thank you for choosing Výčetka!</p>
                        </div>
                    </div>
                </div>
            </TracingBeam>
        </div>
    );
}
