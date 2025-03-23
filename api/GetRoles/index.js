module.exports = async function (context, req) {
    const user = req.body || {};
    const roles = ["XXX", "YYY"];
    
    // for (const [role, groupId] of Object.entries(roleGroupMappings)) {
    //     if (await isUserInGroup(groupId, user.accessToken)) {
    //         roles.push(role);
    //     }
    // }
    context.res.json({
        roles
    });
}
