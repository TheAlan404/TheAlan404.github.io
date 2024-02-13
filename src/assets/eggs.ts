const Eggs = [
    "have i told you I love Mantine?",
    "have you guys heard about rust its 🚀 BLAZINGLY FAST 🚀 and 🚀 MEMORY SAFE 🚀",
    "may my beloved",
    "ülker my beloved",
    "i animated lagtrain using minecraft maps once",
    "Technoblade never dies.",
    "oh hey look funny characters: dQw4w9WgXcQ",
    "Hey! Vsauce - Michael here. Your home security is great. Or is it?",
    '"I am at /.*/"   - Tom Scott',
    "🥚 <- easter egg",
    "theres probably a lot more projects im forgetting to put here lmao",
    "try running `world.execute(me);` on the console",
];

export const randomEgg = () => {
    let list = Eggs;
    return list[Math.floor(Math.random() * list.length)];
};
