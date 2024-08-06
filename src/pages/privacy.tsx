import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function PrivacyPage() {

    const Header2Styling = "text-2xl nd:text-3xl font-bold";
    const Header3Styling = "text-xl md:text-2xl";
    const ParagraphStyling = "text-lg md:text-xl";
    const ySpacing = "space-y-5"

    return (
        <div className="bg-black">
            <TracingBeam>
                <div className="flex justify-center max-w-2xl mx-auto p-12 text-gray-200">
                    <div className="flex flex-col gap-7 flex-wrap">
                        <div className={ySpacing}>
                            <h1 className="text-3xl md:text-4xl font-bold">Zásady ochrany osobních údajů</h1>
                            <p className={ParagraphStyling}>Poslední
                                aktualizace: <span>{new Date().toLocaleDateString('cs-CZ')}</span></p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Úvod</h2>
                            <p className={ParagraphStyling}>
                                Já, Max Juškevič, si cením vašeho soukromí a zavazuji se
                                chránit vaše osobní údaje. Tyto zásady ochrany osobních údajů popisují typy informací,
                                které neshromažďuji, a způsob, jakým používám a chráním vaše data. Používáním mé
                                aplikace souhlasíte s postupy popsanými v těchto zásadách.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Shromažďování a používání údajů</h2>
                            <h3 className={Header3Styling}>Žádné shromažďování údajů</h3>
                            <p className={ParagraphStyling}>
                                Výčetka neshromažďuje, neukládá ani nezpracovává žádné
                                osobní údaje uživatelů. Aplikace je navržena tak, aby fungovala bez přístupu k jakýmkoli
                                uživatelským informacím, což zajišťuje úplné soukromí a anonymitu.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Práva uživatelů podle GDPR a CCPA</h2>
                            <p className={ParagraphStyling}>
                                Podle Obecného nařízení o ochraně osobních údajů (GDPR) a Kalifornského zákona o ochraně
                                soukromí spotřebitelů (CCPA) máte specifická práva týkající se vašich osobních údajů.
                                Nicméně, protože Výčetka neshromažďuje, neukládá ani nezpracovává žádné osobní údaje,
                                jsou tato práva automaticky chráněna.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Služby třetích stran</h2>
                            <p className={ParagraphStyling}>
                                Protože Výčetka neshromažďuje žádná data, neintegruje se ani nepoužívá žádné služby
                                třetích stran, které by mohly shromažďovat nebo zpracovávat osobní údaje.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Zabezpečení údajů</h2>
                            <h3 className={Header3Styling}>Ochrana uživatelských údajů</h3>
                            <p className={ParagraphStyling}>
                                I když Výčetka neshromažďuje osobní údaje, zavazuji se dodržovat nejvyšší standardy
                                bezpečnosti, abych zajistil, že vaše zkušenost s aplikací bude bezpečná a soukromá.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Změny v těchto zásadách ochrany osobních údajů</h2>
                            <p className={ParagraphStyling}>
                                Tyto zásady ochrany osobních údajů mohu čas od času aktualizovat, aby odrážely změny v
                                mých postupech nebo z jiných provozních, právních či regulačních důvodů. Doporučuji vám
                                pravidelně kontrolovat tyto zásady kvůli případným změnám. O významných změnách vás budu
                                informovat zveřejněním nových zásad ochrany osobních údajů na této stránce.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Kontaktujte mě</h2>
                            <p className={ParagraphStyling}>Pokud máte jakékoli dotazy nebo obavy týkající se těchto
                                zásad ochrany osobních údajů nebo mých postupů při zpracování údajů, kontaktujte mě
                                na:</p>
                            <p className={ParagraphStyling}>Max Juškevič<br/>Email: hello@juskevic.com</p>
                            <p className={ParagraphStyling}>Děkuji, že používáte Výčetku!</p>
                        </div>


                        <div className={`${ySpacing} pt-16`}>
                            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
                            <p className={ParagraphStyling}>Last
                                updated: <span>{new Date().toLocaleDateString('en-GB')}</span></p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Introduction</h2>
                            <p className={ParagraphStyling}>
                                I, Max Juškevič, value your privacy and am committed to protecting your personal data.
                                This Privacy Policy outlines the types of information I do and do not collect, as well
                                as how I use and protect your data. By using my application, you agree to the practices
                                described in this policy.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Data Collection and Usage</h2>
                            <h3 className="text-xl md:text-2xl">No Data Collection</h3>
                            <p className={ParagraphStyling}>
                                Výčetka does not collect, store, or process any personal data from its users. The
                                application is designed to function without accessing any user information, ensuring
                                complete privacy and anonymity.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>User Rights Under GDPR and CCPA</h2>
                            <p className={ParagraphStyling}>
                                Under the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), you have specific rights regarding your personal data. However, since Výčetka does not collect, store, or process any personal data, these rights are inherently protected.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Third-Party Services</h2>
                            <p className={ParagraphStyling}>
                                Since Výčetka does not collect any data, it does not integrate with or use any
                                third-party services that might collect or process personal information.
                            </p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Data Security</h2>
                            <h3 className="text-xl md:text-2xl">User Data Protection</h3>
                            <p className={ParagraphStyling}>While Výčetka does not collect personal data, I am committed
                                to maintaining the highest
                                standards of security to ensure that your experience with the application is safe and
                                private.</p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Changes to This Privacy Policy</h2>
                            <p className={ParagraphStyling}>I may update my Privacy Policy from time to time to reflect
                                changes in practices or for
                                other operational, legal, or regulatory reasons. You are encouraged to review this
                                policy periodically for any changes. I will notify you of any significant changes by
                                posting the new Privacy Policy on this page.</p>
                        </div>
                        <div className={ySpacing}>
                            <h2 className={Header2Styling}>Contact Me</h2>
                            <p className={ParagraphStyling}>If you have any questions or concerns regarding this Privacy
                                Policy or my data practices,
                                please contact me at:</p>
                            <p className={ParagraphStyling}>Max Juškevič<br/>Email: hello@juskevic.com</p>
                            <p className={ParagraphStyling}>Thank you for choosing Výčetka!</p>
                        </div>
                    </div>
                </div>
            </TracingBeam>
        </div>
    );
}
