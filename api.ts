/**
 * Smarti
 * the smart in assistify
 *
 * OpenAPI spec version: 1.0
 * Contact: hello@redlink.co
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import request = require('request');
import http = require('http');
import Promise = require('bluebird');

let defaultBasePath = 'https://localhost:8080';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable */

export class Context {
    'contextType': string;
    'domain': string;
    'environment': { [key: string]: string; };
    'environmentType': string;
}

export class Conversation {
    'id': string;
    'lastModified': Date;
    /**
     * metadata
     */
    'meta': ConversationMeta;
    'templates': Array<Template>;
    'user': User;
    /**
     * List of Messages
     */
    'messages': Array<Message>;
    /**
     * Tokens extracted
     */
    'tokens': Array<Token>;
    /**
     * Templates for possible queries
     */
    'queryTemplates': Array<Template>;
    /**
     * conversation context
     */
    'context': Context;
}

export class ConversationMeta {
    /**
     * could the knowledgebase help in this conversation?
     */
    'feedback': ConversationMeta.FeedbackEnum;
    /**
     * message offset
     */
    'lastMessageAnalyzed': number;
    /**
     * conversation status
     */
    'status': ConversationMeta.StatusEnum;
    /**
     * conversation tags
     */
    'tags': Array<string>;
}

export namespace ConversationMeta {
    export enum FeedbackEnum {
        Perfect = <any> 'Perfect',
        Helpful = <any> 'Helpful',
        NotUsed = <any> 'NotUsed',
        Useless = <any> 'Useless',
        Unknown = <any> 'Unknown'
    }
    export enum StatusEnum {
        New = <any> 'New',
        Ongoing = <any> 'Ongoing',
        Complete = <any> 'Complete'
    }
}
export class Message {
    /**
     * message content
     */
    'content': string;
    /**
     * the id of the message
     */
    'id': string;
    /**
     * message metadata
     */
    'metadata'?: { [key: string]: string; };
    /**
     * origin of the message
     */
    'origin': Message.OriginEnum;
    /**
     * marks a private message (not searchable)
     */
    'private'?: boolean;
    'time': Date;
    /**
     * the user who sent the message
     */
    'user': User;
    /**
     * votes for this message - how often this message was considered helpful
     */
    'votes'?: number;
}

export namespace Message {
    export enum OriginEnum {
        User = <any> 'User',
        Agent = <any> 'Agent'
    }
}
export class Query {
    /**
     * confidence that this query is useful
     */
    'confidence': number;
    /**
     * queryCreator
     */
    'creator': string;
    /**
     * name of the service
     */
    'displayTitle': string;
    /**
     * supports inline results
     */
    'inlineResultSupport': boolean;
    /**
     * state of this query
     */
    'state': Query.StateEnum;
    /**
     * query url
     */
    'url': string;
}

export namespace Query {
    export enum StateEnum {
        Suggested = <any> 'Suggested',
        Confirmed = <any> 'Confirmed',
        Rejected = <any> 'Rejected'
    }
}
export class QueryUpdate {
    /**
     * updated slot-assignments of the update
     */
    'slots': Array<Slot>;
    /**
     * full list of tokens
     */
    'tokens': Array<Token>;
}

export class Result {
    'creator': string;
    /**
     * reply
     */
    'replySuggestion': string;
}

export class RocketBot {
    'i': string;
}

export class RocketEvent {
    'bot': RocketBot;
    'channelId': string;
    'channelName': string;
    'messageId': string;
    'origin': string;
    'text': string;
    'timestamp': Date;
    'token': string;
    'triggerWord': string;
    'userId': string;
    'userName': string;
    'webhookUrl': string;
}

export class Slot {
    'inquiryMessage': string;
    'required': boolean;
    'role': string;
    'tokenIndex': number;
    'tokenType': Slot.TokenTypeEnum;
}

export namespace Slot {
    export enum TokenTypeEnum {
        Date = <any> 'Date',
        Topic = <any> 'Topic',
        Entity = <any> 'Entity',
        Place = <any> 'Place',
        Organization = <any> 'Organization',
        Person = <any> 'Person',
        Product = <any> 'Product',
        Attribute = <any> 'Attribute',
        Term = <any> 'Term',
        Keyword = <any> 'Keyword',
        Other = <any> 'Other'
    }
}
export class Template {
    /**
     * probability that this template is the right one
     */
    'probability': number;
    /**
     * slots to fill with tokens
     */
    'slots': Array<Slot>;
    /**
     * state of this template
     */
    'state': Template.StateEnum;
    /**
     * type of the template that can be build from this template
     */
    'type': string;
    /**
     * Queries suggested/executed
     */
    'queries': Array<Query>;
}

export namespace Template {
    export enum StateEnum {
        Suggested = <any> 'Suggested',
        Confirmed = <any> 'Confirmed',
        Rejected = <any> 'Rejected'
    }
}
export class TemplateResponse {
    /**
     * Templates for possible queries
     */
    'templates': Array<Template>;
    /**
     * Tokens extracted
     */
    'tokens': Array<Token>;
}

export class Token {
    /**
     * confidence
     */
    'confidence': number;
    /**
     * end-position
     */
    'end': number;
    /**
     * token hints
     */
    'hints': Array<string>;
    /**
     * message-index
     */
    'messageIdx': number;
    /**
     * origin
     */
    'origin': Token.OriginEnum;
    /**
     * start-position
     */
    'start': number;
    /**
     * token state
     */
    'state': Token.StateEnum;
    /**
     * token type
     */
    'type': Token.TypeEnum;
    /**
     * token value
     */
    'value': any;
}

export namespace Token {
    export enum OriginEnum {
        System = <any> 'System',
        Agent = <any> 'Agent'
    }
    export enum StateEnum {
        Suggested = <any> 'Suggested',
        Confirmed = <any> 'Confirmed',
        Rejected = <any> 'Rejected'
    }
    export enum TypeEnum {
        Date = <any> 'Date',
        Topic = <any> 'Topic',
        Entity = <any> 'Entity',
        Place = <any> 'Place',
        Organization = <any> 'Organization',
        Person = <any> 'Person',
        Product = <any> 'Product',
        Attribute = <any> 'Attribute',
        Term = <any> 'Term',
        Keyword = <any> 'Keyword',
        Other = <any> 'Other'
    }
}
export class User {
    'displayName'?: string;
    'email'?: string;
    /**
     * the hometown of the user, used as fallback for travel-inquires
     */
    'homeTown'?: string;
    /**
     * unique ID
     */
    'id': string;
    'phoneNumber'?: string;
}


export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: request.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: request.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(requestOptions: request.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(_: request.Options): void {
        // Do nothing
    }
}

export enum ConversationwebserviceApiApiKeys {
}

export class ConversationwebserviceApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ConversationwebserviceApiApiKeys, value: string) {
        this.authentications[ConversationwebserviceApiApiKeys[key]].apiKey = value;
    }
    /**
     *
     * @summary append a message to the conversation
     * @param id id
     * @param message message
     */
    public addMessageUsingPOST (id: string, message: Message) : Promise<{ response: http.ClientResponse; body: Conversation;  }> {
        const localVarPath = this.basePath + '/conversation/{id}/message'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addMessageUsingPOST.');
        }

        // verify required parameter 'message' is not null or undefined
        if (message === null || message === undefined) {
            throw new Error('Required parameter message was null or undefined when calling addMessageUsingPOST.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: message,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Conversation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary complete a conversation and add it to indexing
     * @param id id
     */
    public completeUsingPOST (id: string) : Promise<{ response: http.ClientResponse; body: Conversation;  }> {
        const localVarPath = this.basePath + '/conversation/{id}/publish'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling completeUsingPOST.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Conversation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary create a conversation
     * @param conversation conversation
     */
    public createConversationUsingPOST (conversation?: Conversation) : Promise<{ response: http.ClientResponse; body: any;  }> {
        const localVarPath = this.basePath + '/conversation';
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: conversation,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary retrieve a conversation
     * @param id id
     */
    public getConversationUsingGET (id: string) : Promise<{ response: http.ClientResponse; body: Conversation;  }> {
        const localVarPath = this.basePath + '/conversation/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getConversationUsingGET.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Conversation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary update a query based on new slot-assignments
     * @param id id
     * @param template template
     * @param creator creator
     * @param queryUpdate queryUpdate
     */
    public getQueryUsingPOST (id: string, template: number, creator: string, queryUpdate: QueryUpdate) : Promise<{ response: http.ClientResponse; body: Query;  }> {
        const localVarPath = this.basePath + '/conversation/{id}/query/{template}/{creator}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'template' + '}', String(template))
            .replace('{' + 'creator' + '}', String(creator));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getQueryUsingPOST.');
        }

        // verify required parameter 'template' is not null or undefined
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling getQueryUsingPOST.');
        }

        // verify required parameter 'creator' is not null or undefined
        if (creator === null || creator === undefined) {
            throw new Error('Required parameter creator was null or undefined when calling getQueryUsingPOST.');
        }

        // verify required parameter 'queryUpdate' is not null or undefined
        if (queryUpdate === null || queryUpdate === undefined) {
            throw new Error('Required parameter queryUpdate was null or undefined when calling getQueryUsingPOST.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: queryUpdate,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Query;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary retrieve the results for a template from a specific creator
     * @param id id
     * @param template template
     * @param creator creator
     */
    public getResultsUsingGET (id: string, template: number, creator: string) : Promise<{ response: http.ClientResponse; body: Array<Result>;  }> {
        const localVarPath = this.basePath + '/conversation/{id}/template/{template}/{creator}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'template' + '}', String(template))
            .replace('{' + 'creator' + '}', String(creator));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getResultsUsingGET.');
        }

        // verify required parameter 'template' is not null or undefined
        if (template === null || template === undefined) {
            throw new Error('Required parameter template was null or undefined when calling getResultsUsingGET.');
        }

        // verify required parameter 'creator' is not null or undefined
        if (creator === null || creator === undefined) {
            throw new Error('Required parameter creator was null or undefined when calling getResultsUsingGET.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Result>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary retrieve the analysis result of the conversation
     * @param id id
     */
    public prepareUsingGET (id: string) : Promise<{ response: http.ClientResponse; body: Array<Token>;  }> {
        const localVarPath = this.basePath + '/conversation/{id}/analysis'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling prepareUsingGET.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Token>;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary retrieve the intents of the conversation
     * @param id id
     */
    public queryUsingGET (id: string) : Promise<{ response: http.ClientResponse; body: TemplateResponse;  }> {
        const localVarPath = this.basePath + '/conversation/{id}/template'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling queryUsingGET.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: TemplateResponse;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary up-/down-vote a message within a conversation
     * @param id id
     * @param messageId messageId
     * @param vote vote
     */
    public rateMessageUsingPUT (id: string, messageId: string, vote: string) : Promise<{ response: http.ClientResponse; body: Conversation;  }> {
        const localVarPath = this.basePath + '/conversation/{id}/message/{messageId}/{vote}'
            .replace('{' + 'id' + '}', String(id))
            .replace('{' + 'messageId' + '}', String(messageId))
            .replace('{' + 'vote' + '}', String(vote));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling rateMessageUsingPUT.');
        }

        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new Error('Required parameter messageId was null or undefined when calling rateMessageUsingPUT.');
        }

        // verify required parameter 'vote' is not null or undefined
        if (vote === null || vote === undefined) {
            throw new Error('Required parameter vote was null or undefined when calling rateMessageUsingPUT.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Conversation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary update a conversation
     * @param id id
     * @param conversation conversation
     */
    public updateConversationUsingPUT (id: string, conversation: Conversation) : Promise<{ response: http.ClientResponse; body: Conversation;  }> {
        const localVarPath = this.basePath + '/conversation/{id}'
            .replace('{' + 'id' + '}', String(id));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateConversationUsingPUT.');
        }

        // verify required parameter 'conversation' is not null or undefined
        if (conversation === null || conversation === undefined) {
            throw new Error('Required parameter conversation was null or undefined when calling updateConversationUsingPUT.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: conversation,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Conversation;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum RocketchatendpointApiApiKeys {
}

export class RocketchatendpointApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: RocketchatendpointApiApiKeys, value: string) {
        this.authentications[RocketchatendpointApiApiKeys[key]].apiKey = value;
    }
    /**
     *
     * @summary retrieve a conversation ID for a channel and client id
     * @param clientId clientId
     * @param channelId channelId
     */
    public getConversationUsingGET1 (clientId: string, channelId: string) : Promise<{ response: http.ClientResponse; body: any;  }> {
        const localVarPath = this.basePath + '/rocket/{clientId}/{channelId}/conversationid'
            .replace('{' + 'clientId' + '}', String(clientId))
            .replace('{' + 'channelId' + '}', String(channelId));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling getConversationUsingGET1.');
        }

        // verify required parameter 'channelId' is not null or undefined
        if (channelId === null || channelId === undefined) {
            throw new Error('Required parameter channelId was null or undefined when calling getConversationUsingGET1.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     *
     * @summary webhook-target for rocket.chat
     * @param clientId clientId
     * @param payload payload
     */
    public onRocketEventUsingPOST (clientId: string, payload: RocketEvent) : Promise<{ response: http.ClientResponse; body: any;  }> {
        const localVarPath = this.basePath + '/rocket/{clientId}'
            .replace('{' + 'clientId' + '}', String(clientId));
        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling onRocketEventUsingPOST.');
        }

        // verify required parameter 'payload' is not null or undefined
        if (payload === null || payload === undefined) {
            throw new Error('Required parameter payload was null or undefined when calling onRocketEventUsingPOST.');
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: payload,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: any;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}