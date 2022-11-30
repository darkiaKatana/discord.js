let permSize = config.ticket.permissions.viewers.length;
let givedPermissions = config.ticket.permissions.viewers;
for (i=0;i<=permSize; i++) {
    await channel.permissionOverwrites.edit(`${givedPermissions[i]}`, { VIEW_CHANNEL: true }).catch(err => console.log(err));
}
