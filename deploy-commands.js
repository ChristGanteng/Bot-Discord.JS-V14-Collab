const { APIVersion, Routes, REST, SlashCommandBuilder } = require("discord.js");

require("dotenv").config();

const rest = new REST({ version: APIVersion }).setToken(process.env.TOKEN);

const commands = [
    new SlashCommandBuilder().setName("cek-khodam").setDescription("Cek khodam gratis!")
];

async function deployCommands() {
    try {
        const deployed = await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
            body: commands.map((ctx) => ctx.toJSON())
        });
        console.log(deployed);
    } catch(err) {
        console.error(err)
    }
}

deployCommands();