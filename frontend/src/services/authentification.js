import api from './api'

export default {


    login(credentials){
        return api.post('/api/login',credentials)
    },

    register(credentials){
        return api.post('/api/register',credentials)
    },

    updateProfile(credentials){
        return api.post('/api/updateProfile',credentials)
    },

    getDiveSites(){
        return api.get('/api/divesites')
    },

    addNotice(credentials){
        return api.post('/api/notice', credentials)
    },

    getNotice(credentials){
        return api.get('/api/notice',{params:{ 'dive_id':credentials }})
    },

    getPresence(credentials){
        return api.get('/api/presence',{params:{ 'dive_id':credentials }})
    },

    addPresence(credentials){
        return api.post('/api/presence', credentials)
    },

    addDiveSite(credentials){
        return api.post('/api/divesite',credentials)
    },

    listProposal(){
        return api.get('/api/admin/proposals')
    },

    acceptProposal(credentials){
        return api.post('/api/admin/acceptProposal',credentials)
    },

    refuseProposal(credentials){
        return api.delete('/api/admin/refuseProposal',{params: {'id': credentials } })
    },

    listUser(credentials){
        return api.get('/api/admin/users',{headers: {'id': credentials.id, 'token': credentials.token } })
    },

    deleteUser(credentials){
        return api.delete('/api/admin/user',{params: {'id': credentials } })
    },

    deleteDiveSite(credentials){
        return api.delete('/api/admin/deleteDiveSite',{params: {'id': credentials } })
    },

    createUser(credentials){
        return api.post('/api/admin/createUser',credentials)
    },

    updateUser(credentials){
        return api.post('/api/admin/updateProfile',credentials)
    },

    createDiveSite(credentials){
        return api.post('/api/admin/createDiveSite',credentials)
    },

    updateDiveSite(credentials){
        return api.post('/api/admin/updateDiveSite',credentials)
    },

    getDiveImg(credentials){
        return api.post('/api/diveSiteImg',credentials , { responseType: 'blob'})
    }
    
}