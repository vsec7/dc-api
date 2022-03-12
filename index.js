#!/usr/bin/env node

/*
    Simple Discord API Wrapper
    Created by Verry Darmawan (github.com/vsec7)
    11/03/2022
*/

const axios = require('axios');

class Discord {
    constructor(token) {
        if (!token) throw new Error('Please provide discord token');
        this.base = 'https://discord.com/api/v9';
        this.auth = {headers: {'authorization': token}};   
    }

    // GetMe()
    async GetMe() {
        const u = this.base +'/users/@me';   
        let r = await axios.get(u, this.auth)
        return r.data
    }

    // GetMessage(channel_id, limit)
    async GetMessage(c, l) {
        const u = this.base +'/channels/'+ c +'/messages?limit='+ l;   
        let r = await axios.get(u, this.auth)
        return r.data
    }

    // SendMessage(channel_id, text_message)
    async SendMessage(c, m) {
        let d = { content: m };
        const u = this.base +'/channels/'+ c +'/messages';   
        let r = await axios.post(u, d, this.auth)
        return r.data
    }

    // DeleteMessage(channel_id, message_id)
    async DeleteMessage(c, i) {
        const u = this.base +'/channels/'+ c +'/messages/'+ i;   
        let r = await axios.delete(u, this.auth)
        return r.data
    }

    // JoinGuild(invite_code)
    async JoinGuild(c) {
        let d = {};
        const u = this.base +'/invites/'+ c;   
        let r = await axios.post(u, d, this.auth)
        return r.data
    }

    // LeaveGuild(guild_id)
    async LeaveGuild(i) {
        const u = this.base +'/users/@me/guilds/'+ i;   
        let r = await axios.delete(u, this.auth)
        return r.data
    }

}

module.exports = Discord;
