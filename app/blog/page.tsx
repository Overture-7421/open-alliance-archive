import { title, subtitle } from "@/components/primitives";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <h1
                className={title({
                    color: "violet",
                    size: "lg",
                    fullWidth: true,
                })}>
                Blog Archive
            </h1>
            <p className={subtitle()}>
                {
                    "Welcome to the Overture 7421 website. The site is a work in progress. Please check back soon for updates."
                }
            </p>
        </section>
    );
}
