USE employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Manager', 100000, 1),
    ('Sales Associate', 80000, 1),
    ('Engineer Manager', 120000, 2),
    ('Software Engineer', 110000, 2),
    ('Accounting Manager', 115000, 3),
    ('Accountant', 95000, 3),
    ('Legal Manager', 150000, 4),
    ('Lawyer', 125000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Tony', 'Doe', 1, NULL),
    ('Scott', 'Gee', 2, 1),
    ('Louis', 'Dee', 3, NULL),
    ('Nico', 'Haw', 4, 3),
    ('Jamie', 'Tee', 5, NULL),
    ('Alex', 'Cee', 6, 5),
    ('Erin', 'Yee', 7, NULL),
    ('Dexter', 'Poe', 8, 7);