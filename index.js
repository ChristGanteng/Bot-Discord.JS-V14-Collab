const { khodam } = require("./khodam.json");
const { getRandom } = require("./utils.js");
const { bold, Client, GatewayIntentBits, Events } = require("discord.js");

require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});

client.once(Events.ClientReady, (ctx) => {
    console.log(`${ctx.user.username} sudah online!`)
});

client.on(Events.InteractionCreate, async (ctx) => {
    if (ctx.isChatInputCommand()) {
        await ctx.deferReply({ephemeral: true})
        switch(ctx.commandName) {
            case "cek-khodam": {
                await ctx.editReply({
                    content: `Khodam kamu adalah ${bold(getRandom(khodam))}`
                })
            }
        }
    }
});

client.login(process.env.TOKEN);