from functools import wraps


def auto_commit(create_function):
    @wraps(create_function)
    def with_auto_commit(self, *args, **kwargs):
        create_function(self, *args, **kwargs)
        result = create_function(self, *args, **kwargs)
        self.session.commit()
        return result

    return with_auto_commit
