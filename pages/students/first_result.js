import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

export default function StudentResultPage() {
  const [studentId, setStudentId] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    // Simulate fetching the student result data
    // Replace this with your own logic to fetch the data
    const studentResultData = {
      studentId: '123',
      result: 'Pass',
    };

    if (studentResultData.studentId === studentId) {
      setResult(studentResultData.result);
    } else {
      setResult('Student not found');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" fontFamily="Almarai" textAlign="center">
        {' '}
        الحصول على نتيجة الطالبة باستخدام الرقم القومي
      </Typography>
      <TextField
        label="Search Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        sx={{ marginTop: '16px', width: '300px' }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{ marginTop: '16px', fontSize: '25px', fontFamily: 'Almarai' }}
      >
        بحث
      </Button>
      <Typography variant="h5" sx={{ marginTop: '16px' }}>
        Result: {result}
      </Typography>
    </Box>
  );
}
