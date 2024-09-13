import psycopg2
from psycopg2 import extras


with psycopg2.connect(dbname='films') as connection:
    with connection.cursor(cursor_factory=extras.DictCursor) as cursor:
        cursor.execute('''
                       SELECT count(id) FROM films
                       WHERE duration < 110
                       GROUP BY genre
                       ''')
        counts = cursor.fetchall()
        print(counts[2]['count'])


# with psycopg2.connect(dbname='films') as connection:
#     with connection.cursor(cursor_factory=extras.DictCursor) as cursor:
#         cursor.execute('SELECT * FROM directors')
#         rows = cursor.fetchall()
#         for row in rows:
#             print(row['name'])
