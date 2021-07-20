import axios from 'axios'
import {Content} from '../Models/Content'

const ContentMixin = {
    methods: {
        syncCurrentContentWithContentInList () {
            let targetContentIndex = this.contents.list.indexOf( item => item.id === this.currentContent.id)
            if (!targetContentIndex) {
                return false
            }

            this.contents.list[targetContentIndex] = new Content(this.currentContent)
        },
        toggleFavor () {
            this.currentContent.loading = true
            if (this.currentContent.is_favored) {
                this.setUnfavored()
            } else {
                this.setFavored()
            }
        },
        watched () {
            this.currentContent.loading = true
            axios.post('/api/v2/watched', {
                watchable_id: this.currentContent.id,
                watchable_type: 'content'
            })
                .then( () => {
                    this.currentContent.has_watched = true
                    this.currentContent.loading = false
                    this.syncCurrentContentWithContentInList()
                })
                .catch( () => {
                    this.currentContent.loading = false
                })
        },
        setFavored () {
            axios.post('/api/v2/c/'+this.currentContent.id+'/favored')
                .then( () => {
                    this.currentContent.is_favored = true
                    this.currentContent.loading = false
                    this.syncCurrentContentWithContentInList()
                })
                .catch( () => {
                    this.currentContent.loading = false
                })
        },
        setUnfavored () {
            axios.post('/api/v2/c/'+this.currentContent.id+'/unfavored')
                .then( () => {
                    this.currentContent.is_favored = false
                    this.currentContent.loading = false
                    this.syncCurrentContentWithContentInList()
                })
                .catch( () => {
                    this.currentContent.loading = false
                })
        },
        saveComment (comment) {
            if (this.currentContent.comments[0]) {
                axios.post('/api/v2/comment/' + this.currentContent.comments[0].id, {
                    comment: comment,
                    _method: 'PUT'
                })
                    .then(response => {
                        this.currentContent.comments[0].comment = response.data.data.comment
                        this.comment = this.currentContent.comments[0].comment
                        this.syncCurrentContentWithContentInList()
                    })
            } else {
                axios.post('/api/v2/comment', {
                    commentable_id: this.currentContent.id,
                    commentable_type: 'content',
                    comment: comment
                })
                    .then(response => {
                        this.currentContent.comments.push({ comment: response.data.data.comment })
                        this.comment = this.currentContent.comments[0].comment
                        this.syncCurrentContentWithContentInList()
                    })
            }
        },
    }
}

export default ContentMixin
