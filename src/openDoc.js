module.exports = {
    openapi: '3.0.1',
    info: {
      version: '0.0.1',
      title: 'My Portfolio API',
      description: 'My Portfolio API functionality',
      contact: {
        name: 'Mugisha Israel',
        email: 'mugishaisrael18@gmail.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
      }
    },

    // schemes : [
    //   "http",
    //   "http"
    // ],

    // securityDefinitions : {
    //   Bearer : {
    //     type: "apiKey",
    //     name: "Authorization",
    //     in: "header"
    //   }
    // },
    
    servers: [
      {
        url: 'http://localhost:5000/',
        description: 'Local server'
      },
      {
        url: 'https://my-portfolio-back-end.herokuapp.com/doc/',
        description: 'Remote server'
      }
    ],
    
    
    tags: [
      {
        name: 'BlogPost'
      }
    ],
    paths: {
      '/api/Getblog': {
        get: {
          tags: ['BlogPost'],
          summary: 'Returns the list of all the blogs',
          operationId: 'getUsers',
         
          responses: {
            '200': {
              description: 'The list of the blogs',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Blog'
                  },
                  example: {
                    id: 'd5fE_asz',
                    title: 'The New Turing Omnibus',
                    body: 'Alexander K. Dewdney',
                    imgLink: 'https://www.google.com/search?q=image&sxsrf=APq-WBtK50svBCcQkDbGn7EtidO55wEnSg:1643745123363&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kQONLnsECQfkpkg0bbsHJMrdYlKOg&sa=X&ved=2ahUKEwi5-rbho9_1AhWQnxQKHYYpCRgQ9QF6BAgFEAE#imgrc=gxFxsvFBmxeZ9M'
                  },
                }
              }
            },
            
          }
        },

      },

      '/api/Getblog/{id}': {
        get: {
          tags: ['BlogPost'],
          summary: 'Returns the blog post by id',
          parameters: [{
            name: "id",
            in: "path",
            required : true,
            description : "The blog id",
            schema: {
              type: "string",
            },
            
        }],
          responses: {
            '200': {
              description: 'The blog description by id',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Blog'
                  },
                  example: {
                    id: 'd5fE_asz',
                    title: 'The New Turing Omnibus',
                    body: 'Alexander K. Dewdney',
                    imgLink: 'https://www.google.com/search?q=image&sxsrf=APq-WBtK50svBCcQkDbGn7EtidO55wEnSg:1643745123363&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kQONLnsECQfkpkg0bbsHJMrdYlKOg&sa=X&ved=2ahUKEwi5-rbho9_1AhWQnxQKHYYpCRgQ9QF6BAgFEAE#imgrc=gxFxsvFBmxeZ9M'
                  },
                },
              }
            },
            '404': {
              description: 'The blog wasn\'t found'
            }
          }
        },
      },

      '/api/Postblog': {
        post: {
          security: [
            {
              Admin: []
            }
          ],
          tags: ['BlogPost'],
          description: 'Create users',
          parameters: [],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Blog'
                },
                example: {
                  Title: 'The New Turing Omnibus',
                  Body: 'Alexander K. Dewdney',
                  ImageLink: 'https://www.google.com/search?q=image&sxsrf=APq-WBtK50svBCcQkDbGn7EtidO55wEnSg:1643745123363&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kQONLnsECQfkpkg0bbsHJMrdYlKOg&sa=X&ved=2ahUKEwi5-rbho9_1AhWQnxQKHYYpCRgQ9QF6BAgFEAE#imgrc=gxFxsvFBmxeZ9M'
                },
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: 'New Post was created successfully'
            },
            '401': {
              description: 'Unauthorized to Post'
            },
            '400': {
              description: 'Bad Request',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Error'
              //     },
              //     example: {
              //       message: 'User identificationNumbers 10, 20 already exist',
              //       internal_code: 'invalid_parameters'
              //     }
              //   }
              // }
            }
          }
        }

      },

      '/api/Deleteblog/{id}': {
        delete: {
          security: [
            {
              Admin: []
            }
          ],
          tags: ['BlogPost'],
          summary: 'Delete the blog post by id',
          parameters: [{
            name: "id",
            in: "path",
            required : true,
            description : "The blog id",
            schema: {
              type: "string",
            },
            
        }],
          responses: {
            '204': {
              description: 'The blog post deleted successfully',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Blog'
              //     },
              //     example: {
              //       id: 'd5fE_asz',
              //       title: 'The New Turing Omnibus',
              //       body: 'Alexander K. Dewdney',
              //       imgLink: 'https://www.google.com/search?q=image&sxsrf=APq-WBtK50svBCcQkDbGn7EtidO55wEnSg:1643745123363&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kQONLnsECQfkpkg0bbsHJMrdYlKOg&sa=X&ved=2ahUKEwi5-rbho9_1AhWQnxQKHYYpCRgQ9QF6BAgFEAE#imgrc=gxFxsvFBmxeZ9M'
              //     },
              //   },
              // }
            },
            '401': {
              description: 'Unauthorized to Delete Post'
            },
            '404': {
              description: 'The blog wasn\'t found'
            }
          }
        },
      },

      '/api/Updateblog/{id}': {
        patch: {
          security: [
            {
              Admin: []
            }
          ],
          tags: ['BlogPost'],
          description: 'Create users',
          parameters: [{
            name: "id",
            in: "path",
            required : true,
            description : "The blog id",
            schema: {
              type: "string",
            },
            
        }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Blog'
                },
                example: {
                  Title: 'The New Turing Omnibus',
                  Body: 'Alexander K. Dewdney',
                  ImageLink: 'https://www.google.com/search?q=image&sxsrf=APq-WBtK50svBCcQkDbGn7EtidO55wEnSg:1643745123363&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kQONLnsECQfkpkg0bbsHJMrdYlKOg&sa=X&ved=2ahUKEwi5-rbho9_1AhWQnxQKHYYpCRgQ9QF6BAgFEAE#imgrc=gxFxsvFBmxeZ9M'
                },
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: 'Post Was Updated Successfully'
            },
            '401': {
              description: 'Unauthorized to Update Post'
            },
            '400': {
              description: 'Bad Request',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Error'
              //     },
              //     example: {
              //       message: 'User identificationNumbers 10, 20 already exist',
              //       internal_code: 'invalid_parameters'
              //     }
              //   }
              // }
            }
          }
        }

      },

      '/api/comment/{id}': {
        put: {
          security: [
            {
              Admin: [],
            },{
              User : [],
            }
          ],
          tags: ['BlogPost'],
          description: 'Comment on a blog',
          parameters: [{
            name: "id",
            in: "path",
            required : true,
            description : "The blog id",
            schema: {
              type: "string",
            },
            
        }],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Comment'
                },
                example: {
                  Comment: 'Nice Work!',
                },
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: 'Comment Was Updated Successfully'
            },
            
            '400': {
              description: 'Bad Request',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Error'
              //     },
              //     example: {
              //       message: 'User identificationNumbers 10, 20 already exist',
              //       internal_code: 'invalid_parameters'
              //     }
              //   }
              // }
            }
          }
        }

      },

      '/api/like/{id}': {
        put: {
          security: [
            {
              Admin: [],
            },
            {
              User : [],
            }
          ],
          tags: ['BlogPost'],
          description: 'Like a blog',
          parameters: [{
            name: "id",
            in: "path",
            required : true,
            description : "The blog id",
            schema: {
              type: "string",
            },
            
        }],
          // requestBody: {
          //   content: {
          //     'application/json': {
          //       schema: {
          //         $ref: '#/components/schemas/Comment'
          //       },
          //       example: {
          //         Comment: 'Nice Work!',
          //       },
          //     }
          //   },
          //   required: true
          // },
          responses: {
            '200': {
              description: 'Liked a Post Successfully',
            },
            '400': {
              description: 'Bad Request',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Error'
              //     },
              //     example: {
              //       message: 'User identificationNumbers 10, 20 already exist',
              //       internal_code: 'invalid_parameters'
              //     }
              //   }
              // }
            }
          }
        }

      },

      '/api/PostContact': {
        post: {
          tags: ['ContactForm'],
          description: 'Create contact query',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Contact'
                },
                example: {
                  FullName: 'Alexander The Great',
                  Email: 'guest@alexander.com',
                  Messages: 'Hello I want to hire you in my company send your resume and cover letter'
                },
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: 'New Query was created successfully'
            },
            '400': {
              description: 'Bad Request',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Error'
              //     },
              //     example: {
              //       message: 'User identificationNumbers 10, 20 already exist',
              //       internal_code: 'invalid_parameters'
              //     }
              //   }
              // }
            }
          }
        }

      },

      '/api/contact': {
        get: {
          security: [
            {
              Admin: []
            }
          ],
          tags: ['ContactForm'],
          summary: 'Returns the list of all the queries',
          responses: {
            '200': {
              description: 'The list of the queries',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Contact'
                  },
                  example: {
                    id: 'd5fE_asz',
                    FullName: 'Alexander The Great',
                    Email: 'guest@alexander.com',
                    Messages: 'Hello I want to hire you in my company send your resume and cover letter'
                  },
                }
              }
            },

            '401': {
              description: 'Unauthorized to View Contact Queries',
            },
            
          }
        },

      },

      '/api/contact/{id}': {
        get: {
          security: [
            {
              Admin: []
            }
          ],
          tags: ['ContactForm'],
          summary: 'Returns the contact query by id',
          parameters: [{
            name: "id",
            in: "path",
            required : true,
            description : "The query id",
            schema: {
              type: "string",
            },
            
        }],
          responses: {
            '200': {
              description: 'The blog description by id',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Contact'
                  },
                  example: {
                    id: 'd5fE_asz',
                    FullName: 'Alexander The Great',
                    Email: 'guest@alexander.com',
                    Messages: 'Hello I want to hire you in my company send your resume and cover letter'
                  },
                },
              }
            },
            '401': {
              description: 'Unauthorized to View Contact Query By Id',
            },
            '404': {
              description: 'The query wasn\'t found'
            }
          }
        },
      },

      '/api/DeleteContact/{id}': {
        delete: {
          security: [
            {
              Admin: []
            }
          ],
          tags: ['ContactForm'],
          summary: 'Delete the query post by id',
          parameters: [{
            name: "id",
            in: "path",
            required : true,
            description : "The query id",
            schema: {
              type: "string",
            },
            
        }],
          responses: {
            '200': {
              description: 'The query post deleted successfully',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Blog'
              //     },
              //     example: {
              //       id: 'd5fE_asz',
              //       title: 'The New Turing Omnibus',
              //       body: 'Alexander K. Dewdney',
              //       imgLink: 'https://www.google.com/search?q=image&sxsrf=APq-WBtK50svBCcQkDbGn7EtidO55wEnSg:1643745123363&tbm=isch&source=iu&ictx=1&vet=1&fir=gxFxsvFBmxeZ9M%252C0JWe7yDOKrVFAM%252C_%253BqXynBYpZpHkhWM%252C4O2GvGuD-Cf09M%252C_%253BMOAYgJU89sFKnM%252CygIoihldBPn-LM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B2DNOEjVi-CBaYM%252CAOz9-XMe1ixZJM%252C_%253Bl5RllJHFLw5NyM%252CLOSptVP0p_ZwUM%252C_%253BA4G7eW2zetaunM%252Cl3NoP295SYrYvM%252C_%253BbDjlNH-20Ukm8M%252CG9GbNX6HcZ2O_M%252C_%253Bz4_uU0QB2pe-SM%252C7SySw5zvOgPYAM%252C_%253BsmRkxzhk74wASM%252CbUbrhOtxELp8CM%252C_%253BxE4uU8uoFN00aM%252CpEU77tdqT8sGCM%252C_%253BgOUAFhrbQ2nYQM%252COXvyXJop1qSGqM%252C_&usg=AI4_-kQONLnsECQfkpkg0bbsHJMrdYlKOg&sa=X&ved=2ahUKEwi5-rbho9_1AhWQnxQKHYYpCRgQ9QF6BAgFEAE#imgrc=gxFxsvFBmxeZ9M'
              //     },
              //   },
              // }
            },
            '401': {
              description: 'Unauthorized to Delete Contact Queries',
            },
            '404': {
              description: 'The query wasn\'t found'
            }
          }
        },
      },

      '/api/register': {
        post: {
          tags: ['Registration'],
          description: 'Create Account',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                },
                example: {
                  UserName: 'Alexander The Great',
                  Email: 'guest@alexander.com',
                  Password: 'password'
                },
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: 'New User was created successfully'
            },
            '400': {
              description: 'Bad Request',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Error'
              //     },
              //     example: {
              //       message: 'User identificationNumbers 10, 20 already exist',
              //       internal_code: 'invalid_parameters'
              //     }
              //   }
              // }
            }
          }
        }

      },

      '/api/users': {
        get: {
          security: [
            {
              Admin: []
            }
          ],
          tags: ['Users'],
          summary: 'Returns the list of all the users',
          responses: {
            '200': {
              description: 'The list of the users',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/User'
                  },
                }
              }
            },

            '401': {
              description: 'Unauthorized to get All Users',
            },
            
          }
        },

      },

      '/api/login': {
        post: {
          tags: ['Login'],
          description: 'Log In',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                },
                example: {
                  Email: 'guest@alexander.com',
                  Password: 'password'
                },
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: 'User Logged In successfully'
            },
            '400': {
              description: 'Bad Request',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Error'
              //     },
              //     example: {
              //       message: 'User identificationNumbers 10, 20 already exist',
              //       internal_code: 'invalid_parameters'
              //     }
              //   }
              // }
            }
          }
        }

      },

      '/api/admin': {
        post: {
          tags: ['Login'],
          description: 'Log In',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                },
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: 'Admin Logged In Successfully'
            },
            '400': {
              description: 'Bad Request',
              // content: {
              //   'application/json': {
              //     schema: {
              //       $ref: '#/components/schemas/Error'
              //     },
              //     example: {
              //       message: 'User identificationNumbers 10, 20 already exist',
              //       internal_code: 'invalid_parameters'
              //     }
              //   }
              // }
            }
          }
        }

      },

    },

    components: {
      schemas: {
        

        Blog : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
              description: 'The auto-generated id of the blog'
            },
            title: {
              type: 'string',
              description: 'The blog title'
            },
            body: {
              type: 'string',
              description: 'The body of the blog'
            },
            imgLink: {
              type: 'string',
              description: 'The Link of the Image Link'
            },
            
          }
        },

        Comment: {
          type: 'object',

          properties: {
            Comment: {
              type: 'string',
              description: 'Type your comment here',
            }
          }
        },

        Contact : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
              description: 'The auto-generated id of the blog'
            },
            FullName: {
              type: 'string',
              description: 'Fullname of the sender'
            },
            Email: {
              type: 'string',
              description: 'Sender\'s email address'
            },
            Messages: {
              type: 'string',
              description: 'The message of the sender'
            },
            
          }
        },

        User : {
          type: 'object',
          
          properties : {
            id: {
              type: 'string',
              description: 'The auto-generated id of the User'
            },
            UserName: {
              type: 'string',
              description: 'Username of the User'
            },
            Email: {
              type: 'string',
              description: 'User\'s email address'
            },
            Password: {
              type: 'string',
              description: 'The password of the user'
            },
            
          }
        },
        
      },
      securitySchemes: {
        Admin: {
          type: 'apiKey',
          in: 'header',
          name: 'auth-token' 
        },

        User: {
          type: 'apiKey',
          in: 'header',
          name: 'auth-token' 
        },
        
      }
    }
  };
  