import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export default function Watch() {
    const data = [
        {
            label: "Books",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Plush Toys",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
        },

        {
            label: "Electric Scooters",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        },

        {
            label: "Rings",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
        },

        {
            label: "Bedding",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    return (
        <div className=" flex justify-center items-center">
            <div className=" w-[95%] md:w-[90%] lg:w-[80%]">
                
                <Tabs id="custom-animation" value="html">
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
}