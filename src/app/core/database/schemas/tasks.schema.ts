import type {
    RxJsonSchema
} from 'rxdb/plugins/core';
import { RxTagDocumentType, RxTasksSectionDocumentType } from '../RxDB';

export const TAG_SCHEMA: RxJsonSchema<RxTagDocumentType> = {
    title: 'tag schema',
    description: 'describes a tag',
    version: 0,
    keyCompression: false,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            default: ''
        },
        name: {
            type: 'string',
            default: '',
        }
    },
    required: [
        'id',
        'name',
    ]
};


export const TASK_SCHEMA: RxJsonSchema<RxTasksSectionDocumentType> = {
    title: 'task schema',
    description: 'describes a collection of tasks which are logically grouped together',
    version: 0,
    keyCompression: false,
    primaryKey: 'id',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            default: ''
        },
        title: {
            type: 'string',
            default: '',
        },
        tasks: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    notes: {
                        type: 'number'
                    },
                    completed: {
                        type: 'boolean'
                    },
                    dueDate: {
                        type: 'string'
                    },
                    priority: {
                        type: 'number'
                    },
                    tags: {
                        type: 'array',
                        ref: 'tag',
                        items: {
                          type: 'string'
                        }
                    },
                    order: {
                        type: 'number'
                    },
                },
                required: [
                    'title',
                    'priority',
                    'tags',
                    'order'
                ]
            },
            default: []
        }
    },
    required: [
        'id',
        'title',
        'tasks'
    ]
};
