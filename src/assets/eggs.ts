const Eggs = [
    "have i told you I love Mantine?",
    "have you guys heard about rust its-",
    "may my beloved",
    "Technoblade never dies.",
    "oh hey look funny characters: dQw4w9WgXcQ",
    '"I am at /.*/"   - Tom Scott',
    "🥚 <- easter egg",
    "try running `world.execute(me);` on the console",
    "ülker my beloved",
    "press N to simulate new year countdown",
];

export const randomEgg = () => {
    let list = Eggs;
    return list[Math.floor(Math.random() * list.length)];
};
