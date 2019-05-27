ALTER view MedicsPerUnit as 
SELECT mu.id as unitID, 
d.id as doctorID, 
mu.name as UnitName, 
d.name as DoctorName, 
d.rating / d.nr_comms as rating 
FROM medical_units mu 
INNER JOIN unit_doctors ud on ud.id_unit = mu.id 
INNER JOIN doctors d on d.id = ud.id_doctor 

select unitname, sum(rating), sum(nr_comms) from MedicsPerUnit GROUP by unitname


AIzaSyDaXe06Cr_zS4ITlQaHbH93eNqlQ6xapII
