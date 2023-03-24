DROP TABLE IF EXISTS diary;

CREATE TABLE diary(
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    writer_name VARCHAR(100) NOT NULL,
    e_date DATE NOT NULL,
    w_entry VARCHAR(300),
    PRIMARY KEY (entry_id)
);

INSERT INTO diary(writer_name, e_date, w_entry)
VALUES
    ('Julia', '2023-03-24', 'I wanted to be at home today lol :)'),
    ('Test', '2023-03-22', 'This is a test message');