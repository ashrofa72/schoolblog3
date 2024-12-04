import React, { useState } from 'react';
import Codes from '../../data/second.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Firstcodes = () => {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');

  const CodesfilterId = Codes.filter((studentcode) => {
    return studentcode.stnationalid === studentId;
  });
  const CodesfilterName = Codes.filter((studentname) => {
    return studentname.stname.match(studentName);
  });

  const handleSearchId = (e) => {
    e.preventDefault();

    setStudents(CodesfilterId);
  };
  const handleSearchName = (e) => {
    e.preventDefault();
    setStudents(CodesfilterName);
  };

  return (
    <div class="container text-center" style={{ height: '80vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: 'Almarai', mb: 4, mt: 4 }}>
          بيانات طلاب الصف الثاني
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: 'Almarai', mb: 4 }}>
          ابحث هنا بالرقم القومي للحصول على بيانات كود الطالبة
        </Typography>
        <div className="row row-cols-12">
          {/* <div className='col-6'>
                    <form>
                        <input className='text-center' type='text'
                            onChange={(e) => setStudentId(e.target.value)}
                            value={studentId}
                            placeholder='Student ID'
                        />
                        <button className='btn btn-success mx-3' onClick={handleSearchId}>Search</button>
                    </form>

                    <div>
                        {students.map(student => (
                            <div className='my-4 mx-4'>
                                <ul className='list-unstyled'>
                                    <li key={student.id}>
                                    <h3>اسم الطالبة ({student.stname})</h3>
                                        <p>كود الطالب {student.stcode}</p>
                                        <p> الرقم القومي {student.stnationalid}</p>
                                        <p>تاريخ الميلاد {student.stbirthdate}</p>
                                        <p>{student.stcode}@qena1.moe.edu.eg</p>
                                        <p>كلمة المرور Std#{student.stnationalid.slice(1, 7)}</p>
                                    </li>
                                </ul>
                            </div>


                        ))}
                    </div>
                        </div>*/}
          <div className="col-12">
            <form>
              <Stack spacing={2} direction="row" justifyContent="center">
                <input
                  className="text-center"
                  type="text"
                  onChange={(e) => setStudentId(e.target.value)}
                  value={studentId}
                  placeholder="Student National ID"
                />

                <Button
                  variant="contained"
                  className="text-white"
                  onClick={handleSearchId}
                >
                  Search
                </Button>
              </Stack>
            </form>

            {/* <div>
                        {students.map(student => (
                            <div className='my-4 mx-4'>
                                <ul className='list-unstyled'>
                                    <li key={student.id}>
                                        <h3>اسم الطالبة ({student.stname})</h3>
                                        <p>كود الطالب {student.stcode}</p>
                                        <p> الرقم القومي {student.stnationalid}</p>
                                        <p>تاريخ الميلاد {student.stbirthdate}</p>
                                        <p>{student.stcode}@qena1.moe.edu.eg</p>
                                        <p>كلمة المرور Std#{student.stnationalid.slice(1, 7)}</p>
                                    </li>
                                </ul>
                            </div>


                        ))}
                        </div>*/}
            <Box sx={{ width: '25%' }}>
              <div class="col-4">
                {students.map((student) => (
                  <Card
                    key={student.id}
                    variant="outlined"
                    sx={{
                      minWidth: 275,
                      my: 2,
                      ml: 5,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.dark"
                        gutterBottom
                      >
                        بيانات الطالبة
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        fontWeight="bold"
                      >
                        <h3>اسم الطالبة ({student.stname})</h3>
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        fontWeight="bold"
                      >
                        <p>كود الطالب {student.stcode}</p>
                        <p> الرقم القومي {student.stnationalid}</p>
                        <p>تاريخ الميلاد {student.stbirthdate}</p>
                      </Typography>
                      <Typography variant="body2" fontWeight="bold">
                        <p>{student.stcode}@qena1.moe.edu.eg</p>
                        <p>
                          كلمة المرور Std#{student.stnationalid.slice(1, 7)}
                        </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="success" size="small">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Firstcodes;
