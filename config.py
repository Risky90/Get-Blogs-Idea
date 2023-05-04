##OPEN API STUFF
OPENAI_API_KEY = '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'
 # apikey='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'


## FLASK STUFF
class Config(object):
    DEBUG = True
    TESTING = False

class DevelopmentConfig(Config):
    SECRET_KEY = "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";


config = {
    'development': DevelopmentConfig,
    'testing': DevelopmentConfig,
    'production': DevelopmentConfig
}
