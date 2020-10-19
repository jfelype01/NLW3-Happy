import OrphanagesController from '../controllers/OrphanagesController'
import Orphanage from '../models/Orphanages'
import imagesView from './images_view';

export default {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.opening_hours,
            opening_on_weekends: orphanage.opening_weekends,
            images: imagesView.renderMany(orphanage.Image)
        };
    },

    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
};