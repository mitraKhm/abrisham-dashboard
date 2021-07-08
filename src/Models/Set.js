import {Model, Collection} from 'js-abstract-model'
import {ContentList} from './Content'
import Url from './Url'

class Set extends Model {

    constructor(data) {
        super(data, [
            {
                key: 'baseRoute',
                default: ''
            },
            {key: 'id'},
            {key: 'active_contents_count'},
            {key: 'author'},
            {key: 'apiUrl'},
            {key: 'contentUrl'},
            {
                key: 'contents',
                relatedModel: ContentList,
            },
            {key: 'pamphlets_count'},
            {key: 'videos_count'},
            {key: 'contents_count'},
            {key: 'description'},
            {key: 'photo'},
            {key: 'redirect_url'},
            {key: 'setUrl'},
            {key: 'title'},
            {key: 'short_title'},
            {
                key: 'url',
                relatedModel: Url,
            },
            {key: 'tags'},
            {key: 'favor_url'},
            {key: 'unfavor_url'},
            {key: 'created_at'},
            {key: 'updated_at'}
        ]);
    }

    loadContents() {
        let that = this;
        return new Promise((resolve, reject) => {
            that.crud.read(that.url.web, {withContents: true})
                .then(function (response) {
                    that.contents = new ContentList(response.data.set.contents);

                    for (let i = 0; typeof response.data.files.pamphlets[i] !== 'undefined'; i++) {
                        let content = that.contents.getItem('id', response.data.files.pamphlets[i].id);
                        content.file = response.data.files.pamphlets[i].file;
                    }
                    for (let i = 0; typeof response.data.files.videos[i] !== 'undefined'; i++) {
                        let content = that.contents.getItem('id', response.data.files.videos[i].id);
                        content.file = response.data.files.videos[i].file;
                    }

                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }

    setFavor(url) {
        if (typeof url === 'undefined') {
            url = this.favor_url;
        }
        if (url === null) {
            console.error('url is null.');
        }
        return this.crud.create(url);
    }

    setUnfavor(url) {
        if (typeof url === 'undefined') {
            url = this.unfavor_url;
        }
        if (url === null) {
            console.error('url is null.');
        }
        return this.crud.create(url);
    }
}

class SetList extends Collection {
    model() {
        return Set;
    }
}

export {Set, SetList};
